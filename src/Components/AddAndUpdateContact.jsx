import { collection,addDoc } from "firebase/firestore";
import Modal from "./Modal.jsx";
import { Field, Form, Formik } from "formik";
import { db } from "../config/firebase.js"

const AddAndUpdateContact = ({ isOpen, OnClose }) => {

    const addContact= async(contact) => {

    try {
     const contactRef = collection(db,"contacts");
     await addDoc(contactRef, contact) ;
    } catch (error) {
      console.log(error)  
 }}
  return (
    <div>
      <Modal isOpen={isOpen} onClose={OnClose}>
        <Formik initialValues={
            {
                name:"",
                email:"",
            }}
            onSubmit={( values)=>
                {
                    console.log(values);
                    addContact(values);
                }}
        >
          <Form>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name </label>
             <Field name="name" className="border h-10" />
            </div>
            <div className="flex flex-col gap-1" >
              <label htmlFor="email" >Email</label>
             <Field name="email" className="border h-10 mb-4 " />
            </div>
           
            <button type="submit" className=" bg-orange px-3 py-1.5 border ">Add Contact</button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
