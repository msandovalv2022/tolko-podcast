// Hooks
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger' 
import {useRef, useEffect} from 'react' // Es necesario importar estos 2 hooks para poder trabajar con gsap en react

import Plane from "../assets/img/plane.png";
import bannerSlogan from "../assets/img/bannerSlogan.png";

const Header = () => {
  return (
    <section className="header">
      <div className="header__animation">
        <img src={Plane} alt="Avión" />
      </div>

      <div className="header__mobile"></div>
    </section>
  );
};

export default Header;
