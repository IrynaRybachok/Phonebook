import s from "./Contact.module.css";
import { IoMdContact } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contactContainer}>
      <div className={s.contactData}>
        <h2 className={s.contactName}>
          <IoMdContact size="20" className={s.icon} /> {name}
        </h2>
        <p className={s.contactPhone}>
          <FaPhoneSquareAlt size="20" /> {number}
        </p>
      </div>
      <button
        className={`${s.contactBtnDelete} p-1.5 w-10 
        md:w-28 
        lg:w-20
        xl:w-28`}
        onClick={() => dispatch(deleteContact(id))}
      >
        <MdDelete size="20" className={s.iconDelete} />
        <span className={`${s.btnDelete} hidden md:inline`}>Delete</span>
      </button>
    </div>
  );
};

export default Contact;
