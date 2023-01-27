import { useTranslation } from "react-i18next"; //Hook de i18next
import { Link, LinkImg } from "./Links";
import burger from "../assets/img/burger.svg";
import Logo from "../assets/img/logo.png";

const Toolbar = ({ openSidetoolbar, refTool, refLogo, refLogoWhite }) => {
  const {t} = useTranslation();

  return (
    <div className="toolbar">
      <div className="toolbar__logo">
        <LinkImg
          class="imgLight toolbar__logo--normal"
          link="#"
          img={Logo}
        />
      </div>

      <div className="toolbar__burger">
        <div className="toolbar__burger--burger" onClick={openSidetoolbar}>
          <p className="whiteTx">{t("toolbar.menu")}</p>
          <img src={burger} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
