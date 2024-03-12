import { Outlet } from 'react-router';
import s from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AnnonceAPI } from 'API/annonce-api';
import { setAnnonceList } from 'store/annonce/annonce-slice';
import { useEffect, useRef } from 'react';
import { Header } from 'components/Header/Header';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export function App() {
  // init gsap :
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // useRefLogo
  const refLogo = useRef();
  const dispatch = useDispatch();

  async function fetchAnnonces() {
    const annoncesList = await AnnonceAPI.fetchAllAnnonces();
    dispatch(setAnnonceList(annoncesList));
  }

  useEffect(() => {
    fetchAnnonces();
  }, []);

  //const datasAnnonces = useSelector((store) => store.ANNONCE.annonceList);
  //const datasInterieurs = useSelector((store) => store.ANNONCE.interieurList);

  return (
    <div className="bg-slate-50 ">
      <Header logoRef={refLogo} />
      <Outlet />
    </div>
  );
}
