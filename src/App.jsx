import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./Components/ContactCard";
import AddAndUpdateContact from "./Components/AddAndUpdateContact";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const Onopen = () => {
    setOpen(true);
  };

  const OnClose = () => {
    console.log("closing modal");
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);

        const contactLists = contactsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setContacts(contactLists);

        // Subscribe to real-time updates
        const unsubscribe = onSnapshot(contactsRef, (snapShot) => {
          const updatedContacts = snapShot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(updatedContacts);
        });

        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
      } catch (error) {
        console.error(error);
      }
    };

    getContacts();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <Search Onopen={Onopen} />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={OnClose} />
      <ToastContainer />
    </>
  );
};

export default App;
