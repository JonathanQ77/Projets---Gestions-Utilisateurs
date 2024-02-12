import { AnnonceCard } from "components/AnnonceCard/AnnonceCard";
import { useNavigate } from "react-router-dom";

export function AnnonceList({ annonceList }) {
  const navigate = useNavigate();
  return (
    <div>
      {annonceList.map((annonce) => {
        return (
          <div key={annonce.id} className="">
            <AnnonceCard
              title={annonce.titre}
              date={annonce.date}
              content={annonce.description}
              onClickNavigate={() => navigate("/annonce/" + annonce.id)}
              onClickDelete={() => alert("delete")}
            />
          </div>
        );
      })}
    </div>
  );
}
