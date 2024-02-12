import { useSelector } from "react-redux";
import s from "./style.module.css";
import { AnnonceList } from "components/containers/AnnonceList/AnnonceList";

export function AllAnnoncesPages({ props }) {
  //appel des datas du store :
  const annonceList = useSelector((store) => store.ANNONCE.annonceList);
  return (
    <div className="mt-5 ml-3 ">
      Liste des annonces :
      <div>
        <AnnonceList annonceList={annonceList} />
      </div>
    </div>
  );
}
