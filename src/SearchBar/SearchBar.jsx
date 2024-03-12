import s from './style.module.css';
import searchBar from '../assets/searchBar.svg';
export function SearchBar({ textChange, placeholder }) {
  return (
    <>
      <input
        type="text"
        className="w-3/4 relative left-14  h-9 rounded-xl border pl-10 focus:outline-none focus:ring focus:ring-blue-200"
        onChange={(e) => textChange(e.target.value)}
        placeholder={placeholder}
      />

      <img
        src={searchBar}
        alt=""
        className="w-7  top-[1203px] left-[76px] absolute"
      />
    </>
  );
}
