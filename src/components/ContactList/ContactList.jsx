import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { slideInFromRight } from "../../motion/motion";

const ContactList = () => {
  const filterContactsList = useSelector(selectFilteredContacts);
  return (
    <ul
      className={`flex flex-col gap-4 justify-start items-center xl:flex-row xl:flex-wrap xl:gap-x-5 xl:gap-y-5 `}
    >
      {filterContactsList.map((data) => (
        <motion.li
          initial="hidden"
          animate="visible"
          variants={slideInFromRight()}
          className={`${s.contactItem} w-xs lg:w-sm`}
          key={data.id}
        >
          <Contact data={data} />
        </motion.li>
      ))}
    </ul>
  );
};

export default ContactList;
