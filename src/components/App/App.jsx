import { Outlet } from "react-router";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AnnonceAPI } from "API/annonce-api";
import { setAnnonceList } from "store/annonce/annonce-slice";
import { useEffect } from "react";

export function App() {
  const dispatch = useDispatch();

  async function fetchAllAnnonces() {
    const annoncesList = await AnnonceAPI.fetchAll();
    dispatch(setAnnonceList(annoncesList));
  }

  useEffect(() => {
    fetchAllAnnonces();
  }, []);

  const datas = useSelector((store) => store.ANNONCE.annonceList);

  return (
    <div className="">
      <Outlet />

      {datas.map((annonce) => {
        return <div key={annonce.id}>{annonce.name}</div>;
      })}
    </div>
  );
}
