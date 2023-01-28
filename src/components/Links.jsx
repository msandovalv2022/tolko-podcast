const Link = (props) => {
  return (
    <a className="link" target={"_blank"} rel={"noopenner"} href={props.link}>
      {props.text}
    </a>
  );
};

const LinkTel = ({ tel, number }) => {
  return <a tel={tel}>{number}</a>;
};

const LinkMail = ({ mail, text }) => {
  return <a href={`mailto: ${mail}`}>{text}</a>;
};
const LinkImg = (props) => {
  return (
    <a
      className={props.class}
      target={"_blank"}
      rel={"noopenner"}
      href={props.link}
    >
      <img src={props.img} alt="" />
    </a>
  );
};

export { Link, LinkTel, LinkMail, LinkImg };
