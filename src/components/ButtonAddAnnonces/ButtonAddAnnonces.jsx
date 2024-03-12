import s from "./style.module.css";

export function ButtonAddAnnonces({ children, onClickCreate, isDisabled }) {
  return (
    <div>
      <button
        className="bg-blue-500 disabled:bg-blue-200 w-full p-2 rounded-2xl mt-6 text-md text-white cursor-pointer hover:bg-white hover:text-black transition duration-700"
        disabled={isDisabled}
        onClick={onClickCreate}
        type="button"
      >
        {children}
      </button>
    </div>
  );
}
