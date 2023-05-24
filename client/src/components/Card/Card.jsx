import "./Card.css";

const Card = (props) => {
  return (
    <div className="cardEx">
        <img className="exerciseImg" src={props.gif_url}></img>
      <div className="info">
        <h1 className="title">
          {props.name}
        </h1>
        {/* <p>Id: {props.id}</p> */}
        <div className="description">
        <h1>
          Muscle: {props.muscle}
        </h1>
        <h1>
          Body:{" "}
          {props.body_part}
        </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
