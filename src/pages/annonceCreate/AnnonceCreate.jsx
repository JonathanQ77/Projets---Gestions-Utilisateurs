import { useState } from "react";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AnnonceForm } from "components/AnnonceForm/AnnonceForm";

// stock le formulaire le toute les annonces : pour creer
export function AnnonceCreate() {
  const dispatch = useDispatch(); // pour ecriture dans le store

  const navigate = useNavigate();

  // FUNCTION add data create :

  return (
    <div className="mt-16 m-5">
      <AnnonceForm
        title={"TITRE"}
        onClickEdit={() => console.log("edit")}
        onClickDelete={() => console.log("DELETE")}
      />{" "}
    </div>
  );
}
