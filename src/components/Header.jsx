import Plane from "../assets/img/plane.png";
import bannerSlogan from "../assets/img/bannerSlogan.png";

const Header = () => {
  return (
    <section className="header">
      <div className="header__animation">
        <img src={Plane} alt="Avión" />
      </div>
    </section>
  );
};

export default Header;
