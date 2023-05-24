import "./Card.css";

const Card = (props) => {
  return (
    <div className="cardEx">
      <div className="imageContainer">
        <img className="exerciseImg" src={props.gif_url}></img>
      </div>
      <div className="info">
        <h2 className="title">{props.name}</h2>
        {/* <p>Id: {props.id}</p> */}
        <div className="descriptionEx">
          <h3>Muscle: {props.muscle}</h3>
          <h3>Body: {props.body_part}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
