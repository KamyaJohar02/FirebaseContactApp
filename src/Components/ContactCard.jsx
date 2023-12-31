
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { PropTypes } from 'prop-types'
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import UseDisclose from "./UseDisclose";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ContactCard = ({ contact }) => {
  const { Onopen, onClose, isOpen } = UseDisclose();

  const deleteContact=(id)=>{
    try {
      deleteDoc(doc(db,"contacts",id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
    console.log(error) ;
    }

  }
  return (
    <>
   
      <div key={contact.id} >
           <div className="flex  bg-yellow items-center p-2 rounded-lg justify-between">
            <HiOutlineUserCircle onClick={Onopen}  className="text-orange text-4xl"/>
            <div className=" flex flex-col font-semibold ">
              <h2 className="text-md">{contact.name}</h2>
              <p className="text-sm">{contact.email}</p>
              
            </div>
            <div className="flex text-3xl">
            <RiEditCircleFill onClick={Onopen} className=""/>
            <MdDelete onClick={() => deleteContact(contact.id)} className="text-orange cursor-pointer"/>
              </div>
          </div>
        </div>
        <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
   
    </>
  )
}

ContactCard.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    // Add more prop validations if needed
  }).isRequired,
};

export default ContactCard
