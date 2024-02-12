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

  useEffect(() => {
    fetchAnnonces();
  }, []);

  //const datasAnnonces = useSelector((store) => store.ANNONCE.annonceList);
  //const datasInterieurs = useSelector((store) => store.ANNONCE.interieurList);

  return (
    <div className="bg-slate-50 ">
      <Header />
      <Outlet />
    </div>
  );
}
