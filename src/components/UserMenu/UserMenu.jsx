import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  return (
    <div className={` flex justify-between items-center gap-4 md:gap-8`}>
      <h2 className={`${s.title} text-2xl md:text-4xl lg:text-6xl`}>
        Welcome, {user.name}
      </h2>
      <button
        className={s.btnLogout}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
