import { useState } from "react";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AnnonceForm } from "components/AnnonceForm/AnnonceForm";
import { AnnonceAPI } from "API/annonce-api";
import { addAnnonce } from "store/annonce/annonce-slice";

// stock le formulaire le toute les annonces : pour creer
export function AnnonceCreate() {
  const dispatch = useDispatch(); // pour ecriture dans le store
  const navigate = useNavigate();

  // FUNCTION add data create :
  async function createAnnonce(formValues) {
    const createdAnnonce = await AnnonceAPI.fetchCreateAnnonce({
      ...formValues,
      date: new Date().toLocaleDateString(),
      image: "https://picsum.photos/seed/picsum/400/400",
    });
    dispatch(addAnnonce(createdAnnonce));
    navigate("/");
  }
  return (
    <div className="mt-16 m-5">
      <AnnonceForm title={"CREER MON ANNONCE 🖥️"} submit={createAnnonce} />{" "}
    </div>
  );
}
