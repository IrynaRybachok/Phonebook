import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import s from "./Loyout.module.css";

const Layout = () => {
  return (
    <div className={`${s.layoutWrap} container `}>
      <AppBar />
      <div className={`${s.mainContent} mb-2 md:mb-4`}>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
