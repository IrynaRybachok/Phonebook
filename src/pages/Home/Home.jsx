import { Link } from "react-router-dom";
import s from "./Home.module.css";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../../motion/motion";
const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromBottom()}
      className={s.homeSection}
    >
      <div
        className={`${s.container}  
        p-4 flex flex-col gap-1 items-center justify-center
        md:pt-10 md:pr-12 md:pb-10 md:pl-12 md:gap-4
        lg:pt-12 lg:pr-16 lg:pb-12 lg:pl-16
        xl:pr-20 xl:pl-20`}
      >
        <h2
          className={`${s.title} text-3xl md:text-5xl lg:text-7xl xl:text-8xl`}
        >
          Welcome to Phonebook!
        </h2>
        <p className={`${s.text} text-xl md:text-3xl lg:text-4xl`}>
          This is your personal contact management application. Here you can:
        </p>
        <ul className={`flex flex-col justify-center items-start gap-2 mb-5`}>
          <li className={`flex gap-1 justify-start items-center`}>
            <FaStar className={s.iconStar} size={15} />
            <span className={`${s.itemText} text-xl md:text-2xl lg:text-3xl`}>
              Add new contacts
            </span>
          </li>
          <li className={`flex gap-1 justify-start items-center`}>
            <FaStar className={s.iconStar} size={15} />
            <span className={`${s.itemText} text-xl md:text-2xl lg:text-3xl`}>
              Edit and delete existing ones
            </span>
          </li>
          <li className={`flex gap-1 justify-start items-baseline`}>
            <FaStar className={s.iconStar} size={15} />
            <span className={`${s.itemText} text-xl md:text-2xl lg:text-3xl`}>
              Quickly find the people you need using the search function
            </span>
          </li>
        </ul>
        <div className={`flex gap-2 text-xl md:text-3xl lg:text-4xl`}>
          <Link className={s.linkRegister} to="/register">
            <span>Sign up</span>
          </Link>
          <p className={s.text}>now and take control of your contacts!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
