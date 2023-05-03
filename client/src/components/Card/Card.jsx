import "./Card.css";

const Card = (props) => {
  return (
    <div className="cardEx">
        <img className="exerciseImg" src={props.gif_url}></img>
      <div className="info">
        <h1 className="title">
          {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </h1>
        {/* <p>Id: {props.id}</p> */}
        <div className="description">
        <h1>
          Muscle: {props.muscle.charAt(0).toUpperCase() + props.muscle.slice(1)}
        </h1>
        <h1>
          Body:{" "}
          {props.body_part.charAt(0).toUpperCase() + props.body_part.slice(1)}
        </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
