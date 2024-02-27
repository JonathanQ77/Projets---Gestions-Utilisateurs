import { useSelector } from "react-redux";
import s from "./style.module.css";
import { AnnonceList } from "components/containers/AnnonceList/AnnonceList";

export function AllAnnoncesPages({ props }) {
  //appel des datas du store :
  const annonceList = useSelector((store) => store.ANNONCE.annonceList);
  return (
    <div className="mt-5 ml-3 ">
      <h3 className="text-center mt-10 text-3xl font-roboto font-semibold underline underline-offset-2">
        Liste des annonces :
      </h3>
      <div className="">
        <AnnonceList annonceList={annonceList} />
      </div>
    </div>
  );
}
