import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div
      className={`${s.wrapLogin} flex flex-col-reverse justify-center  md:flex-row`}
    >
      <div
        className={`${s.boxLogin} w-full pt-8 pr-6 pb-8 pl-6  md:pt-10 md:pr-15 md:pb-10 md:pl-10 md:w-2xl `}
      >
        <h2 className={`${s.title} text-4xl mb-3 md:text-7xl md:mb-2.5`}>
          Login
        </h2>
        <p className={`${s.text} text-lg md:text-2xl md:mb-10`}>
          Please login to your account.
        </p>
        <LoginForm />
        <p className={`${s.text} text-lg md:text-2xl md:mb-10`}>
          New user?{" "}
          <Link className={s.linkRegister} to="/register">
            Register
          </Link>
        </p>
      </div>
      <div
        className={`${s.boxWelcome} flex flex-col justify-evenly items-center w-full pt-10 pr-6 pb-10 pl-6  md:p-15 lg:w-lg`}
      >
        <h2
          className={`${s.titleWelcome} text-4xl mb-4 md:text-7xl lg:text-8xl`}
        >
          Welcome back
        </h2>
        <p className={`${s.discr} text-lg text-start md:text-3xl`}>
          It’s great to have you here! Log in to access your account and get
          back to where you left off.
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
