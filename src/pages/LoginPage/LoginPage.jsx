import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../../motion/motion";

const LoginPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromBottom()}
      className={`${s.wrapLogin} flex flex-col-reverse justify-center md:flex-row md:w-2xl lg:w-4xl xl:w-6xl`}
    >
      <div
        className={`${s.boxLogin} w-full pt-8 pr-6 pb-8 pl-6 
        md:p-10
        xl:pr-16 xl:pl-16 `}
      >
        <h2 className={`${s.title} text-3xl mb-3 md:text-6xl md:mb-2.5`}>
          Login
        </h2>
        <p className={`${s.text} text-lg md:text-2xl md:mb-10`}>
          Please login to your account.
        </p>
        <LoginForm />
        <div className={`flex gap-2 text-lg md:text-2xl md:mb-10`}>
          <p className={s.text}>New user?</p>
          <Link className={s.linkRegister} to="/register">
            <span>Register</span>
          </Link>
        </div>
      </div>
      <div
        className={`${s.boxWelcome} w-full flex flex-col justify-evenly items-center pt-10 pr-6 pb-10 pl-6  
        md:p-10
        xl:p-16`}
      >
        <h2
          className={`${s.titleWelcome} text-4xl mb-4 md:text-6xl lg:text-8xl`}
        >
          Welcome back
        </h2>
        <p className={`${s.discr} text-lg text-start md:text-3xl`}>
          It’s great to have you here! Log in to access your account and get
          back to where you left off.
        </p>
      </div>
    </motion.div>
  );
};
export default LoginPage;
