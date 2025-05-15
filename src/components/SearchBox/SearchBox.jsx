import { FaMagnifyingGlass } from "react-icons/fa6";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/silectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  return (
    <>
      <div className={`flex flex-col gap-2 items-center`}>
        <p className={s.text}>Find contacts by name</p>
        <div className={`flex justify-center items-center gap-2`}>
          <FaMagnifyingGlass className={s.icon} size="20" />
          <input
            className={`${s.input} w-full lg:w-md`}
            type="text"
            value={filter}
            onChange={(e) => {
              dispatch(changeFilter(e.target.value));
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
