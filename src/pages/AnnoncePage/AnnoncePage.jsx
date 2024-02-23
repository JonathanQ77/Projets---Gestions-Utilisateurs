import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
export function AnnoncePage({ titre, description, date, auteur, image }) {
  // page de l'annonce (STOCK LE FORMULAIRE DE L ANNONCE pour modifier ou supprimer)
  // permutation button et bloc formulaire si doit etre editable :
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch(); // pour ecriture dans le store
  const { annonceId } = useParams(); // hook recup data dans le get
  const annonce = useSelector((store) =>
    store.ANNONCE.annonceList.find((annonce) => annonce.id === annonceId)
  );
  const navigate = useNavigate();
  return <></>;
}
