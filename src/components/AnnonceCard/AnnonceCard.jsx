import { useState } from "react";
import s from "./style.module.css";
import logo from "assets/trash.svg";
import { ButtonAddAnnonces } from "components/ButtonAddAnnonces/ButtonAddAnnonces";

export function AnnonceCard({
  title,
  date,
  content,
  onClickNavigate,
  onClickDelete,
}) {
  // STATE POUR LE CHANGEMENT HOVER DE LA DIV DE LA CARD  :
  const [cardHovered, setCardHovered] = useState(false);
  const [colorTrash, setColorTrash] = useState(false);

  // function du delete trash
  function deleteTrash_(e) {
    onClickDelete();
    e.stopPropagation();
  }
  return (
    <>
      <div
        onMouseEnter={() => setCardHovered(true)}
        onMouseLeave={() => setCardHovered(false)}
        style={{ borderColor: cardHovered ? "#086788" : "black" }}
        className="w-80 p-0 mt-10 ml-10 bg-white rounded-lg shadow-md transform  transition-transform duration-300 ease-in-out"
      >
        <img
          className="w-full h-40  object-cover rounded-t-lg"
          alt="Card Image"
          src="https://via.placeholder.com/150"
        />
        <svg
          className="absolute w-8 top-4 left-[270px] transition duration-500"
          onMouseEnter={() => setColorTrash(true)}
          onMouseLeave={() => setColorTrash(false)}
          onClick={deleteTrash_}
          style={{ fill: colorTrash ? "red" : "#086788" }}
          viewBox="0 0 48.00 48.00"
          xmlns="http://www.w3.org/2000/svg"
          fill="#086788"
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

        <div className="p-4">
          <h2 className="text-xl  font-semibold">{title}</h2>
          <h5 className="text-gray-600">{date}</h5>
          {/** FAIRE CLASS OVERFLOW pour depassement text contenu probleme :  */}
          <p className="">{content}</p>
          <div className="flex justify-between items-center mt-4">
            <ButtonAddAnnonces
              children="Découvrir"
              onClickCreate={onClickNavigate}
            />
          </div>
        </div>
      </div>
    </>
  );
}
