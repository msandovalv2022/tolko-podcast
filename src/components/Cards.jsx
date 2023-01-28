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
    <section className="imgCard">
      <iframe
        width="100%"
        height="200px"
        src="https://www.youtube.com/embed/W_yM7OkmHgM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="imgCard__article">
        <h3 className={titleClass}>{title}</h3>
        <div className="imgCard__article--text">
          <p className={textClass}>{text}</p>
        </div>
      </div>
    </section>
  );
};

export { ImgCard, VidCard };
