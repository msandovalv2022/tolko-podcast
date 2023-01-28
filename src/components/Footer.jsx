// Components
import { Link, LinkImg, LinkTel, LinkMail } from "./Links";

// Img
import LogoWhite from "../assets/img/logoWhite.png";
import Qr from "../assets/img/qr.png";
import TwitterWhite from "../assets/img/twitterWhite.png";
import InstagramWhite from "../assets/img/instagramWhite.png";
import YoutubeWhite from "../assets/img/youtubeWhite.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__info">
        <div className="footer__info--logo">
          <LinkImg class="" link="" img={LogoWhite} />
        </div>
        <div className="footer__info--qr">
          <LinkImg class="" link="" img={Qr} />
        </div>
        <div className="footer__info--contacto">
          <div className="footer__info--contacto--direction">
            <p>Contáctanos</p>
            <Link
              link="https://goo.gl/maps/YTNKLqWfp7zE6qyX9"
              text="Lago Alberto No. 375, piso 19, Col. Anáhuac, Miguel Hidalgo, CDMX."
            />
          </div>
          <div className="footer__info--contacto--phone">
            <LinkTel tel="5512345678" number="55 1234 5678" /> <br />
            <LinkTel tel="5590134567" number="55 9013 4567" />
            <p></p>
          </div>
          <div className="footer__info--contacto--mail">
            <LinkMail mail="contacto@leccionesdevuelo.mx" text="contacto@leccionesdevuelo.mx" />
          </div>
        </div>
        <div className="footer__info--social">
          <LinkImg class="" link="" img={TwitterWhite} />
          <LinkImg class="" link="" img={InstagramWhite} />
          <LinkImg class="" link="" img={YoutubeWhite} />
        </div>
      </div>
      <div className="footer__privacidad">
        <Link link="#" text="Aviso de privacidad © 2023. Lecciones de Vuelo. Todos los derechos reservados." />
      </div>
    </section>
  );
};

export default Footer;
