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
// const VidCard = () =>{
//     return(

//     )
// }
export {
  ImgCard,
  // VidCard
};
