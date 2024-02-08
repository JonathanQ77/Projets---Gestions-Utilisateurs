import { Outlet } from "react-router";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AnnonceAPI } from "API/annonce-api";
import { setAnnonceList } from "store/annonce/annonce-slice";
import { useEffect } from "react";
import { setInterieurList } from "store/annonce/annonce-slice";
import { Header } from "components/Header/Header";

export function App() {
  const dispatch = useDispatch();

  async function fetchAnnonces() {
    const annoncesList = await AnnonceAPI.fetchAllAnnonces();
    dispatch(setAnnonceList(annoncesList));
  }

  async function fetchInterieurs() {
    const interieursList = await AnnonceAPI.fetchAllInterieur();
    dispatch(setInterieurList(interieursList));
  }

  useEffect(() => {
    fetchAnnonces();
    fetchInterieurs();
  }, []);

  //const datasAnnonces = useSelector((store) => store.ANNONCE.annonceList);
  //const datasInterieurs = useSelector((store) => store.ANNONCE.interieurList);

  return (
    <div className="">
      <Header />
      <Outlet />
      {/*
{datasAnnonces.map((annonce, i) => {
        return (
          <div key={annonce.id + i}>
            {annonce.description} {annonce.prixLoyer}
          </div>
        );
      })}
      {datasInterieurs.map((interieur, i) => {
        return (
          <div key={interieur.id + i}>
            {interieur.chauffage} {interieur.meublé}
          </div>
        );
      })}
*/}
    </div>
  );
}
