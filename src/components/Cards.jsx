const ImgCard = ({
  imgSrc,
  alt,
  title,
  text,
  imgClass,
  titleClass,
  textClass,
}) => {
  return (
    <section className="imgCard">
      <img className="imgCard__img" src={imgSrc} alt={alt} />
      <div className="imgCard__article">
        <h3 className={titleClass}>{title}</h3>
        <div className="imgCard__article--text">
          <p className={textClass}>{text}</p>
        </div>
      </div>
    </section>
  );
};

const VidCard = ({ title, text, imgClass, titleClass, textClass }) => {
  return (
    <section className="vidCard">
      <iframe
        width="100%"
        height="200px"
        src="https://www.youtube.com/embed/TY4dKSADHdw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="vidCard__article">
        <h3 className={titleClass}>{title}</h3>
        <div className="vidCard__article--text">
          <p className={textClass}>{text}</p>
        </div>
      </div>
    </section>
  );
};

const Article = ({
  imgSrc,
  imgAlt,
  cardTitle,
  cardSubtitle,
  cardText,
  titleClass,
  textClass,
  bgColor,
}) => {
  return (
    <section
      className={"littleCard"}
      style={{ backgroundColor: bgColor}}
    >
      <img src={imgSrc} alt={imgAlt} />
      <div className="littleCard__info">
        <h2 className={titleClass}>{cardTitle}</h2>
        <h3>{cardSubtitle}</h3>
        <p className={textClass}>{cardText}</p>
      </div>
    </section>
  );
};

export {Article, ImgCard, VidCard};
