import s from "./style.module.css";

export function Logo({ logo, title, onClickHome }) {
  return (
    <div onClick={onClickHome}>
      {" "}
      <div className="flex flex-col relative left-10 top-5">
        <img className="w-14 relative left-6" src={logo} alt="Logo" />
        <div className="font-bold text-xl text-blue-500 ">{title}</div>
      </div>{" "}
    </div>
  );
}
