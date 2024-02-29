import s from "./style.module.css";

export function Pagination({
  totalPosts,
  postsPerPages,
  setCurrentPage,
  currentPage,
}) {
  let page = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPages); i++) {
    page.push(i);
  }

  return (
    <div className="flex justify-center space-x-10 ">
      {page.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`${page === currentPage ? "active" : ""} ${
              s.active
            } active:font-bold active:border-red-800 active:text-black `}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
