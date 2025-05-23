import { Link } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./RegistrationPage.module.css";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../../motion/motion";

const RegistrationPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromBottom()}
      className={`${s.wrapRegister} flex flex-col-reverse jusftify-center md:flex-row md:w-2xl lg:w-4xl xl:w-6xl`}
    >
      <div
        className={`${s.boxRegister} w-full pt-8 pr-6 pb-8 pl-6  
        md:p-10
        xl:pr-16 xl:pl-16 `}
      >
        <h2 className={`${s.title} text-3xl mb-3 md:text-6xl md:mb-2.5`}>
          Register
        </h2>
        <p className={`${s.text} text-lg md:text-2xl md:mb-10`}>
          Your data is safe with us. We value your privacy. Please fill out the
          form below to register for Phonebook.
        </p>
        <RegistrationForm />
        <div
          className={`flex items-center gap-0.5 text-lg 
          md:text-2xl md:mb-6 md:flex-col md:items-center
          lg:flex-row lg:items-stretch`}
        >
          <p className={s.text}>Already have an account? </p>
          <Link
            className={`${s.linkLogin} p-1 w-18 h-8 md:p-2 md:w-20 md:h-8 lg:w-20 lg:h-9`}
            to="/login"
          >
            <span>Login</span>
          </Link>
        </div>
      </div>
      <div
        className={`${s.boxWelcome}  flex flex-col justify-evenly items-center w-full pt-10 pr-6 pb-10 pl-6
        md:p-10
        xl:p-16`}
      >
        <h2
          className={`${s.titleWelcome} text-4xl mb-4 md:text-5xl lg:text-7xl xl:text-8xl`}
        >
          Welcome to Phonebook!
        </h2>
        <p
          className={`${s.discr} text-lg text-start md:text-3xl md:text-center`}
        >
          We are here to make managing your contacts simple and convenient.
          Please fill out the registration form to start using all the features!
        </p>
      </div>
    </motion.div>
  );
};

export default RegistrationPage;
