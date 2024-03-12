import s from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { AnnonceForm } from 'components/AnnonceForm/AnnonceForm';
import { AnnonceAPI } from 'API/annonce-api';
import { deleteAnnonce, updateAnnonce } from 'store/annonce/annonce-slice';
export function AnnoncePage({ titre, description, date, auteur, image }) {
  // page de l'annonce (STOCK LE FORMULAIRE DE L ANNONCE pour modifier ou supprimer)
  // permutation button et bloc formulaire si doit etre editable :
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch(); // pour ecriture dans le store
  const { annonceId } = useParams(); // hook recup data dans le get
  /**const annonce = useSelector((store) =>
    store.ANNONCE.annonceList.find(
      (annonce) => annonce._id === '65eb79e58415e3143ed009bf'
    )
  );
 */

  const annonce = useSelector((store) =>
    store.ANNONCE.annonceList.find((annonce) => annonce._id === annonceId)
  );

  console.log(annonceId);
  const navigate = useNavigate();

  // function pour update l'annnonce
  async function updateData(formValues) {
    const updatedAnnonce = await AnnonceAPI.update({
      ...formValues,
      id: annonce.id,
    });
    dispatch(updateAnnonce(updatedAnnonce));
    setIsEditable(false);
  }
  // function pour supprimer l'annonce : demander si l'utilisateur est sur de lui
  function deleteAnnonce_(annonce) {
    if (window.confirm(" êtes vous sur de vouloir supprimer l'annonce ? ")) {
      AnnonceAPI.deleteById(annonce.id);
      dispatch(deleteAnnonce(annonce));
      navigate('/');
    }
  }
  return (
    <>
      {annonce && (
        <AnnonceForm
          submit={isEditable && updateData}
          isEditable={isEditable}
          title={isEditable ? 'Editer mon annonce' : annonce.titre}
          annonce={annonce}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickDelete={() => deleteAnnonce_(annonce)}
        />
      )}
    </>
  );
}
