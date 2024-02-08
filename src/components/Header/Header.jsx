import { Logo } from "components/Logo/Logo";
import s from "./style.module.css";
import { ButtonAddAnnonces } from "components/ButtonAddAnnonces/ButtonAddAnnonces";

export function Header({ props }) {
  return (
    <div>
      <div>
        <Logo title={""} />
      </div>
      <div>
        <ButtonAddAnnonces />
      </div>
    </div>
  );
}
