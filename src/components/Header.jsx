import Plane from "../assets/img/plane.png";
import fullBanner from "../assets/img/fullBanner.png";
// Hooks
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react"; // Es necesario importar estos 2 hooks para poder trabajar con gsap en react

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    const animatedHeader = document.querySelector(".header__animation");
    const slogan = document.querySelector(".header__animation--slogan");
    const plane1 = document.querySelector(".header__animation--plane1");
    const plane2 = document.querySelector(".header__animation--plane2");
    const plane3 = document.querySelector(".header__animation--plane3");
    const plane4 = document.querySelector(".header__animation--plane4");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animatedHeader,
        // markers: true,
        start: "top top",
        end: "+=700 20% ",
        pin: true,
        // scrub: 4,
      },
    });
    tl.to(plane1, { x: "850px", duration: 0.7 });
    tl.to(plane2, { x: "-850px", duration: 0.7 });
    tl.to(plane3, { x: "850px", duration: 0.7 });
    tl.to(plane3, { y: "-500px", duration: 0.7 }, "-=0.7");
    tl.to(plane4, { x: "850px", duration: 0.7 });
    tl.to(plane4, { y: "500px", duration: 0.7 }, "-=0.7");

  }, []);

  return (
    <section className="header">
      <div className="header__animation">
        <img
          src={fullBanner}
          alt="Banner"
          className="header__animation--slogan"
        />
        <img src={Plane} alt="Avión" className="header__animation--plane1" />
        <img src={Plane} alt="Avión" className="header__animation--plane2" />
        <img src={Plane} alt="Avión" className="header__animation--plane3" />
        <img src={Plane} alt="Avión" className="header__animation--plane4" />
      </div>

      <div className="header__mobile"></div>
    </section>
  );
};

export default Header;
