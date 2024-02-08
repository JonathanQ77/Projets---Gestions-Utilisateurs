import s from "./style.module.css";

export function Logo({ logo, title, onClickHome }) {
  return (
    <div onClick={onClickHome}>
      {" "}
      <div className="">
        <img src={logo} alt="Logo" />
        <div className="">{title}</div>
      </div>{" "}
    </div>
  );
}
