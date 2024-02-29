import s from "./style.module.css";

export function Pagination({
  totalPosts,
  postsPerPages,
  setCurrentPage,
  currentPage,
  previousPage,
  nextPage,
}) {
  let page = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPages); i++) {
    page.push(i);
  }

  return (
    <div className="flex justify-center space-x-10  w-1/4 relative left-[600px] mb-10 ">
      <button
        className="bg-blue-400 rounded-xl p-1 w-24 text-xl font-bold"
        onClick={(page) => previousPage(page)}
      >
        {" "}
        Prev{" "}
      </button>
      {page.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`${page === currentPage ? "active" : ""} ${
              s.active
            } active:font-bold active:border-red-800 active:text-black bg-blue-200 rounded-xl p-1 w-24 hover:bg-blue-400 trnasition duration-500 `}
          >
            {page}
          </button>
        );
      })}
      <button
        className="bg-blue-400 rounded-xl p-1 w-24 text-xl font-bold"
        onClick={(page) => nextPage(page)}
      >
        {" "}
        Next{" "}
      </button>
    </div>
  );
}
