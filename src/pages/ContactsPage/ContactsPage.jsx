import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { PiAddressBookTabsLight } from "react-icons/pi";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import s from "./ContactsPage.module.css";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../../motion/motion";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromBottom()}
        className={`${s.containerPhonebook} w-full pt-8 pr-6 pb-8 pl-6 
        md:p-10 md:flex md:gap-10 md:w-2xl
        lg:w-4xl
        xl:pr-12 xl:pl-12 xl:w-6xl`}
      >
        <div className={s.contactForm}>
          <h1 className={s.title}>
            Phonebook <PiAddressBookTabsLight size="30" />
          </h1>
          <ContactForm />
        </div>
        <div className={`flex flex-col gap-4 md:gap-8 md:justify-start`}>
          <SearchBox />
          {isLoading && !isError && <Loader />}
          <ContactList />
        </div>
      </motion.div>
    </>
  );
};

export default ContactsPage;
