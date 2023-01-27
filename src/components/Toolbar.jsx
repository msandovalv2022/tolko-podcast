// Hooks
import { useTranslation } from "react-i18next"; //Hook de i18next

// Components
import { Link, LinkImg } from "./Links";

// Img
import blackBurger from "../assets/img/blackBurger.png";
import Logo from "../assets/img/logo.png";
import Twitter from "../assets/img/twitter.png";
import Instagram from "../assets/img/instagram.png";
import Youtube from "../assets/img/youtube.png";

const Toolbar = ({ openSidetoolbar, refTool, refLogo, refLogoWhite }) => {
  const { t } = useTranslation();

  return (
    <div className="toolbar">
      <div className="toolbar__logo">
        <LinkImg class="imgLight toolbar__logo--normal" link="#" img={Logo} />
      </div>
      <div className="toolbar__social">
        <LinkImg class="" link="" img={Twitter} />
        <LinkImg class="" link="" img={Instagram} />
        <LinkImg class="" link="" img={Youtube} />
      </div>

      <div className="toolbar__burger">
        <img src={blackBurger} alt="" />
      </div>
    </div>
  );
};

export default Toolbar;
