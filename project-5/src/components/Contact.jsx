import { deleteDoc, doc } from "firebase/firestore";
import { CgProfile } from "react-icons/cg";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

export const Contact = ({ contact, setIsOpen, setButtonTxt, setContactToEdit }) => {

    const deleteContact = async (id) => {
        try{
            const contactDocRef = doc(db, "Contacts", id);
            await deleteDoc(contactDocRef);
            toast.success("contact deleted successfully");
        }   
        catch(err){
            toast.error("Error occured while deleting");
        }
    }

    const editContact = () => {
        setContactToEdit(contact)
        setButtonTxt("Edit Contact");
        setIsOpen(true);
    }


  return (
    <div
      className="bg-yellow-200 flex items-center justify-between rounded-md px-1 py-2 mb-4"
    >
      <div className="flex items-center gap-[6px]">
        <CgProfile className="text-5xl text-yellow-600" />
        <div className="max-w-[100px] flex flex-col gap-1">
          <h2 className="text-4 font-medium">{contact.name}</h2>
          <p className="text-[14px]">{contact.email}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <RiEditCircleLine onClick={() => editContact()} className="text-3xl" />
        <IoMdTrash onClick={() => deleteContact(contact.id)} className="text-3xl text-purple-700" />
      </div>
    </div>
  );
};
