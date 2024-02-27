import s from "./style.module.css";
import pencil from "../../assets/pencil.svg";
import trash from "../../assets/trash.svg";
import { ButtonAddAnnonces } from "components/ButtonAddAnnonces/ButtonAddAnnonces";
import { useState } from "react";
import { ValidatorService } from "services/form-validators";
import { FieldError } from "components/FieldError/FieldError";

// constante pour gerer les nombres de lettres autorisées dans les inputs :

const VALIDATORS = {
  titre: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 15);
  },
  description: (value) => {
    return ValidatorService.min(value, 3);
  },
};
export function AnnonceForm({
  isEditable = true,
  title,
  annonce,
  onClickEdit,
  onClickDelete,
  submit,
}) {
  // state valeur du formulaire :
  const [formValues, setFormValues] = useState({
    titre: annonce?.titre || "",
    description: annonce?.description || "",
  });
  // state qui gere l'erreur de VALIDATOR  :
  const [formErrors, setFormErrors] = useState({
    titre: annonce?.titre ? undefined : "",
    description: annonce?.description ? undefined : "",
  });
  // validation function error :
  function validate(fieldName, fieldValue, done) {
    setFormErrors(
      {
        ...formErrors,
        [fieldName]: VALIDATORS[fieldName](fieldValue),
      },
      done
    );
  }
  // function affichage hidden si true :
  function hasError() {
    return Object.values(formErrors).some((error) => error !== undefined);
  }
  console.log(formErrors);
  // function mis a jour :
  function updateFormValues(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

    validate(e.target.name, e.target.value);
  }
  const titleInput = (
    <div>
      <label
        for="titleForm"
        className="font-semibold text-sm text-gray-600 pb-1 block"
      >
        Titre
      </label>
      <input
        id="titleForm"
        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 "
        type="text"
        onChange={updateFormValues}
        name="titre"
        value={formValues.title}
      />
      <div>
        <FieldError messageError={formErrors.titre} />
      </div>
    </div>
  );
  const contentInput = (
    <div>
      <label
        className="font-semibold text-sm text-gray-600 pb-1 mt-5 block"
        for="contentForm"
      >
        Content
      </label>
      <textarea
        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        type="text"
        id="contentForm"
        onChange={updateFormValues}
        name="description"
        value={formValues.content}
        rows="5"
      />
      <div>
        <FieldError messageError={formErrors.description} />
      </div>
    </div>
  );

  const submitButton = (
    <div>
      <ButtonAddAnnonces
        isDisabled={hasError()}
        onClickCreate={() => submit(formValues)}
      >
        Envoyer ☑️
      </ButtonAddAnnonces>
    </div>
  );

  const pencilIcon = (
    <img
      className="w-7 relative  left-24 "
      onClick={onClickEdit}
      src={pencil}
      alt="editAnnonce"
    />
  );
  const [colorTrashed, setColorTrashed] = useState(false);
  const trashIcon = (
    <svg
      className="w-7 relative left-36 transition duration-700"
      onClick={onClickDelete}
      viewBox="0 0 48.00 48.00"
      xmlns="http://www.w3.org/2000/svg"
      fill="#086788"
      onMouseEnter={() => setColorTrashed(true)}
      onMouseLeave={() => setColorTrashed(false)}
      style={{ fill: colorTrashed ? "red" : "#086788" }}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#CCCCCC"
        stroke-width="0.384"
      />
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>trash-solid</title>{" "}
        <g id="Layer_2" data-name="Layer 2">
          {" "}
          <g id="invisible_box" data-name="invisible box">
            {" "}
            <rect width="48" height="48" fill="none" />{" "}
          </g>{" "}
          <g id="icons_Q2" data-name="icons Q2">
            {" "}
            <path d="M43,8.8a2.3,2.3,0,0,1-.6,1.6A1.7,1.7,0,0,1,41,11H7.1A2.1,2.1,0,0,1,5,9.2a2.3,2.3,0,0,1,.6-1.6A1.7,1.7,0,0,1,7,7H17V5a2,2,0,0,1,2-2H29a2,2,0,0,1,2,2V7h9.9A2.1,2.1,0,0,1,43,8.8Z" />{" "}
            <path d="M11.2,15h0a2,2,0,0,0-2,2.2l2.6,26a2,2,0,0,0,2,1.8H34.2a2,2,0,0,0,2-1.8l2.6-26a2,2,0,0,0-2-2.2H11.2Z" />{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );

  // state changement couleur hover :

  const actionIcons = (
    <>
      <div>{onClickEdit && pencilIcon}</div>
      <div>{onClickDelete && trashIcon}</div>
    </>
  );

  return (
    <form class="relative py-3 sm:max-w-xl sm:mx-auto md:max-w-3xl ">
      <div class="relative px-4 py-10 bg-white mx-8  shadow rounded-3xl sm:p-10">
        <div className="flex justify-center">
          <h2 className="text-2xl font-roboto font-semibold text-center mb-14">
            {title}
          </h2>
          {actionIcons}
        </div>

        <div class="max-w-md mx-auto">
          <div class="mt-5 grid grid-cols-1 sm:grid-cols-1 gap-5">
            <div>{isEditable && titleInput}</div>
            <div>
              {isEditable ? (
                contentInput
              ) : (
                <p className={s.content}>{annonce.description}</p>
              )}
            </div>
          </div>
          <div class="mt-5">
            <div>{submit && submitButton}</div>
          </div>

          <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            <a
              class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              href="#"
            >
              have an account? Log in
            </a>
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </form>
  );
}
