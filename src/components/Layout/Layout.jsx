import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import s from "./Loyout.module.css";

const Layout = () => {
  return (
    <div className={`${s.layoutWrap} container `}>
      <AppBar />
      <div className={`${s.mainContent} p-8 md:p-9`}>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
