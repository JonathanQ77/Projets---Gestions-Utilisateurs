import { Logo } from "components/Logo/Logo";
import logo from "../../assets/home.svg";
import s from "./style.module.css";
import { ButtonAddAnnonces } from "components/ButtonAddAnnonces/ButtonAddAnnonces";
import { useNavigate } from "react-router-dom";

export function Header({ props }) {
  const navigate = useNavigate();
  return (
    <div className="bg-sky-50 h-36 shadow-md">
      <div>
        <Logo
          title={"EASY IMMO"}
          logo={logo}
          onClickHome={() => navigate("/")}
        />
      </div>
      <div>
        <ButtonAddAnnonces />
      </div>
    </div>
  );
}
