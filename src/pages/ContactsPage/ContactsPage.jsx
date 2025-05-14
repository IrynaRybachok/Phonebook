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

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div className={`${s.containerPhonebook} flex gap-10`}>
        <div className={s.contactForm}>
          <h1 className={s.title}>
            Phonebook <PiAddressBookTabsLight size="30" />
          </h1>
          <ContactForm />
        </div>
        <div className={s.searchList}>
          <SearchBox />
          {isLoading && !isError && <Loader />}
          <ContactList />
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
