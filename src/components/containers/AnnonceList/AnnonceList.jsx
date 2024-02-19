import { AnnonceCard } from "components/AnnonceCard/AnnonceCard";
import { useNavigate } from "react-router-dom";

export function AnnonceList({ annonceList }) {
  const navigate = useNavigate();

  function deleteAnnonce(e) {}
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
              onClickDelete={() => alert("delete")}
              image={annonce.image}
            />
          </div>
        );
      })}
    </div>
  );
}
