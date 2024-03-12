import { Logo } from 'components/Logo/Logo';
import logo from '../../assets/blog.svg';
import s from './style.module.css';
import { ButtonAddAnnonces } from 'components/ButtonAddAnnonces/ButtonAddAnnonces';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useEffect } from 'react';
export function Header({ logoRef }) {
  //const gsap_ = gsapInit;
  const onLoadLogo = () => {
    gsap.timeline().fromTo(
      '#logo',
      {
        rotate: 0,
        opacity: 0,
      },
      {
        rotate: 360,
        opacity: 1,
      }
    );
  };

  useEffect(() => {
    onLoadLogo();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="bg-sky-50 h-36 shadow-md flex justify-between ">
      <div ref={logoRef} id="logo">
        <Logo
          title={'Blogy News'}
          logo={logo}
          onClickHome={() => navigate('/')}
        />
      </div>
      <div className="mt-5 relative -left-10 top-5">
        <ButtonAddAnnonces
          children="Creer une annonce !"
          onClickCreate={() => navigate('/annonce/new')}
        />
      </div>
    </div>
  );
}
