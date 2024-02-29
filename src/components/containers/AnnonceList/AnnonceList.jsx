import { AnnonceAPI } from "API/annonce-api";
import { AnnonceCard } from "components/AnnonceCard/AnnonceCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAnnonce } from "store/annonce/annonce-slice";

export function AnnonceList({ annonceList }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function deleteAnnonce_(annonce) {
    if (window.confirm("êtes vous sur de vouloir supprimer l'annonce ?")) {
      AnnonceAPI.deleteById(annonce.id);
      dispatch(deleteAnnonce(annonce));
    }
  }

  // function slice data par page :

  return (
    <div className="grid md:grid-cols-2">
      {annonceList.map((annonce) => {
        return (
          <div key={annonce.id} className=" mt-10">
            <AnnonceCard
              title={annonce.titre}
              date={annonce.date}
              content={annonce.description}
              onClickNavigate={() => navigate("/annonce/" + annonce.id)}
              onClickDelete={() => deleteAnnonce_(annonce)}
              image={annonce.image}
            />
          </div>
        );
      })}
    </div>
  );
}
