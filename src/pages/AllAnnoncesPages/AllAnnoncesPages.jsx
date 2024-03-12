import { useSelector } from 'react-redux';
import s from './style.module.css';
import { AnnonceList } from 'components/containers/AnnonceList/AnnonceList';
import { SearchBar } from 'SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'components/Pagination/Pagination';
import { gsap } from 'gsap';
export function AllAnnoncesPages({ props }) {
  //appel des datas du store :
  const [searchText, setSearchText] = useState('');
  const annonceList = useSelector((store) => store.ANNONCE.annonceList);
  const filteredList = annonceList.filter((annonce) => {
    const containTitle = annonce.title
      .toUpperCase()
      .includes(searchText.trim().toUpperCase());

    const containContent = annonce.description
      .toUpperCase()
      .includes(searchText.trim().toUpperCase());

    return containTitle || containContent;
  });
  //LOGIC PAGINATE
  const [currentPage, setCurrentPage] = useState([1]);
  const [postsPerPages, setPostsPerPages] = useState([2]);
  //  const currentPage = 1;  page de defaut
  // const postsPerPages = 5;
  const lastPostIndex = currentPage * postsPerPages;
  const firstPostIndex = lastPostIndex - postsPerPages;
  const slicedData = filteredList.slice(firstPostIndex, lastPostIndex);
  const previousPage = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage === lastPostIndex / 2) {
      setCurrentPage(3);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  //animation GSAP :
  const slideScrollTop = (element, delay, duration) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration || 1,
        delay: delay || 0.7,
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: 'bottom center',
        },
      }
    );
  };
  const animateH1 = () => {
    gsap
      .timeline()
      .fromTo(
        '#titreH1',
        {
          x: -1000,
          opacity: 0,
          color: 'white',
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        }
      )
      .to(
        '#emoji',

        {
          rotate: 360,
          duration: 1,
        }
      );
  };

  useEffect(() => {
    animateH1();
  }, []);
  useEffect(() => {
    slideScrollTop('#listAnnonces');
  }, []);
  return (
    <div className="mt-5 ml-3 ">
      <div
        className={`w-[99vw] h-[100vh] flex justify-center items-center text-[3rem] relative bottom-5 right-3
         text-white ${s.bg}`}
      >
        <h1 className=" font-raleway tracking-[0.01em]" id="titreH1">
          Besoin d'une information sur les dernieres nouveautées technologiques
          ?{' '}
          <span id="emoji" className="text-[5rem] flex justify-center">
            😎
          </span>{' '}
        </h1>
      </div>
      <h3 className="text-center mt-10 text-3xl font-roboto font-semibold underline underline-offset-2">
        Liste des annonces :
      </h3>
      <div className="mt-5  ">
        <div className="flex justify-content-center ">
          <SearchBar
            placeholder={'Search your notes ...'}
            textChange={setSearchText}
          />
        </div>
      </div>

      {/**si pas de contenu :  */}
      {annonceList?.length === 0 && (
        <div className="mt-24 ">
          <span className="">
            <span className="text-center grid text-3xl ">😱😱😱</span>{' '}
            <p className="text-center text-lg">
              Aucune annonce disponible, voulez vous en
              <Link
                className="text-blue-500  hover:text-blue-900"
                to="/annonce/new"
              >
                {' '}
                creer une
              </Link>
            </p>
          </span>
        </div>
      )}
      <div className="" id="listAnnonces">
        <AnnonceList annonceList={slicedData} />
        <Pagination
          totalPosts={filteredList.length}
          postsPerPages={postsPerPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
    </div>
  );
}
