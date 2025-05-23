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
      className={`flex flex-col gap-4 justify-start items-center lg:flex-row lg:flex-wrap lg:gap-x-4.5 lg:gap-y-5 `}
    >
      {filterContactsList.map((data, index) => (
        <motion.li
          custom={index}
          initial="hidden"
          animate="visible"
          variants={slideInFromRight(1)}
          className={`${s.contactItem} w-full md:w-xs lg:w-3xs xl:w-sm `}
          key={data.id}
        >
          <Contact data={data} />
        </motion.li>
      ))}
    </ul>
  );
};

export default ContactList;
