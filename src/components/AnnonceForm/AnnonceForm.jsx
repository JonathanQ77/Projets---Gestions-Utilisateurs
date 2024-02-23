import s from "./style.module.css";
import pencil from "../../assets/pencil.svg";
import trash from "../../assets/trash.svg";
import { ButtonAddAnnonces } from "components/ButtonAddAnnonces/ButtonAddAnnonces";
import { useState } from "react";
export function AnnonceForm({
  isEditable = true,
  title,
  annonce,
  onClickEdit = true,
  onClickDelete = true,
  submit,
}) {
  const titleInput = (
    <div>
      <label>Titre</label>
      <input type="text" onChange={""} name="title" value={""} />
    </div>
  );
  const contentInput = (
    <div>
      <label>Content</label>
      <textarea type="text" onChange={""} name="content" value={""} rows="5" />
    </div>
  );

  const submitButton = (
    <div>
      <ButtonAddAnnonces isDisabled={""}>Envoyer</ButtonAddAnnonces>
    </div>
  );
  const pencilIcon = (
    <img
      className="w-7 relative left-20 "
      onClick={onClickEdit}
      src={pencil}
      alt="editAnnonce"
    />
  );
  const [colorTrashed, setColorTrashed] = useState(false);
  const trashIcon = (
    <svg
      className="w-7 relative left-24 transition duration-700"
      onClick={onClickDelete}
      viewBox="0 0 48.00 48.00"
      xmlns="http://www.w3.org/2000/svg"
      fill="#086788"
      onMouseEnter={() => setColorTrashed(true)}
      onMouseLeave={() => setColorTrashed(false)}
      style={{ fill: colorTrashed ? "red" : "#086788" }}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#CCCCCC"
        stroke-width="0.384"
      />
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>trash-solid</title>{" "}
        <g id="Layer_2" data-name="Layer 2">
          {" "}
          <g id="invisible_box" data-name="invisible box">
            {" "}
            <rect width="48" height="48" fill="none" />{" "}
          </g>{" "}
          <g id="icons_Q2" data-name="icons Q2">
            {" "}
            <path d="M43,8.8a2.3,2.3,0,0,1-.6,1.6A1.7,1.7,0,0,1,41,11H7.1A2.1,2.1,0,0,1,5,9.2a2.3,2.3,0,0,1,.6-1.6A1.7,1.7,0,0,1,7,7H17V5a2,2,0,0,1,2-2H29a2,2,0,0,1,2,2V7h9.9A2.1,2.1,0,0,1,43,8.8Z" />{" "}
            <path d="M11.2,15h0a2,2,0,0,0-2,2.2l2.6,26a2,2,0,0,0,2,1.8H34.2a2,2,0,0,0,2-1.8l2.6-26a2,2,0,0,0-2-2.2H11.2Z" />{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );

  // state changement couleur hover :

  const actionIcons = (
    <>
      <div>{onClickEdit && pencilIcon}</div>
      <div>{onClickDelete && trashIcon}</div>
    </>
  );

  return (
    <form>
      <div className="flex justify-center ">
        <div>
          <h2 className="">{title}</h2>
        </div>
        <span className="flex  space-x-7">{actionIcons}</span>
      </div>{" "}
      <div>{isEditable && titleInput}</div>
      <div>{isEditable && contentInput}</div>
    </form>
  );
}
