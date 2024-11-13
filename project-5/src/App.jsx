import { useEffect, useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { IoIosSearch } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import {
  collection,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./config/firebase";
import { Contact } from "./components/Contact";
import { AddAndUpdateContact } from "./components/AddAndUpdateContact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [buttonTxt, setButtonTxt] = useState("");
  const [contactToEdit, setContactToEdit] = useState(null);
  const [searchItem, setSearchItem] = useState("");

  const onOpen = () => {
    setButtonTxt("Add To Contact");
    setContactToEdit(null);
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "Contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList;
        });
      } catch (err) {
        console.log("Error occured while getting data from the data base", err);
      }
    };
    getContacts();
  }, []);



  const debouncingFunction = (func,delay) => {
    let deboucingTimer;
    return (...args) => {
      clearTimeout(deboucingTimer);
      deboucingTimer = setTimeout(() =>{
        func.apply(this,args)
      },delay)
    }
  }


  const debouncingFilterContacts = debouncingFunction((e) => {
    const value = e.target.value;
    setSearchItem(value)
    filterContacts(value);
  },500)

  const filterContacts = debouncingFunction((value) => {
    console.log(value);
    const contactRef = collection(db,"Contacts");
    
    onSnapshot(contactRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id:doc.id,
          ...doc.data()
        }
      })
      const filteredContacts = contactList.filter((contact) => 
        contact.name.toLowerCase().includes(value.toLowerCase())
      )
      setContacts(filteredContacts);
      return filteredContacts;

    })
  })


  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <NavBar />
        <div className="flex items-center gap-2">
          <div className="flex relative items-center flex-grow">
            <IoIosSearch className="absolute text-white text-2xl ml-2" />
            <input
              onChange={debouncingFilterContacts}
              className="bg-transparent border border-white rounded-md h-10 flex-grow pl-9 text-white"
              type="text"
              placeholder="Search Contact"
            />
          </div>
          <div>
            <IoIosAddCircle
              className="text-white text-5xl cursor-pointer"
              onClick={onOpen}
            />
          </div>
        </div>
        <div className="mt-6">
          {contacts.map((contact) => {
            return (
              <Contact
                contact={contact}
                key={contact.id}
                setIsOpen={setIsOpen}
                onClose={onClose}
                setButtonTxt={setButtonTxt}
                setContactToEdit={setContactToEdit}
              />
            );
          })}
        </div>
      </div>
      {isOpen && (
        <AddAndUpdateContact
          isOpen={isOpen}
          onClose={onClose}
          buttonTxt={buttonTxt}
          contactToEdit={contactToEdit}
        />
      )}
      <ToastContainer position="bottom-center"/>
    </>
  );
}

export default App;
