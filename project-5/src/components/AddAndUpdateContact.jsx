import { Field, Form, Formik } from "formik"
import { Model } from "./Modal"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import { toast } from "react-toastify"

export const AddAndUpdateContact = ({isOpen, onClose, buttonTxt, contactToEdit}) => {

    
    const addContact = async (contact) => {
        if(contact.name === "" || contact.email === ""){
            toast.error("Please enter the Name and Email fields to add the contact");
            return;
        }
        try{
        const contactRef = collection(db, "Contacts");
        await addDoc(contactRef, contact);
        toast.success("Contact Added Successfully");
        onClose()
        }
        catch(err){
            toast.error("Unable To add Contact");
        }
    }
    
    const editContact = async(contact) => {
        try{
            const contactRef = doc(db, "Contacts", contact.id);
            await updateDoc(contactRef, {
                name: contact.name,
                email: contact.email
            })
            toast.success("Contact Updated Successfully");
            onClose()
        }
        catch(err){
            toast.error("Unable to Update the Contact");
            console.log("error occured while updating the contact", err);
        }
    }

    return (
        <>
        <div>
        <Model isOpen={isOpen} onClose={onClose}>
        <Formik
        initialValues={{
            name: contactToEdit?.name || "",
            email: contactToEdit?.email || "",
        }}
        enableReinitialize
        onSubmit={(values) => {
            console.log(values);
            if(buttonTxt === "Add To Contact"){
                addContact(values)
            }
            else{
                editContact({...values, id:contactToEdit.id})
            }
        }
        }
        >
            <Form>
                <div className="flex flex-col gap-2 mx-auto w-[90%]">
                    <label htmlFor="name" className="text-xl font-bold">Name</label>
                    <Field name="name" className="border-black border-2 px-2 py-2 rounded-md" placeholder="Enter the Name"/>
                    <label htmlFor="email" className="text-xl font-bold">Email</label>
                    <Field name="email" className="border-black border-2 px-2 py-2 rounded-md" placeholder="Enter the Email"/>
                </div>
                <button className="bg-yellow-600 ml-[50%] -translate-x-[50%] mt-4 px-2 py-2 rounded-md text-white">{buttonTxt}</button>
            </Form>
        </Formik>
        </Model>
        </div>
        </>
    )
}