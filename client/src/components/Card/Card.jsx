import "./Card.css";

const Card = (props) => {
    return(
        <div className="cardExercise">
            <h1>Name: {props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h1>
            {/* <p>Id: {props.id}</p> */}
            <h1>Muscle: {props.muscle.charAt(0).toUpperCase() + props.muscle.slice(1)}</h1>
            <h1>Body_part: {props.body_part.charAt(0).toUpperCase() + props.body_part.slice(1)}</h1>
            <img src={props.gif_url}></img>
        </div>
    )
}

export default Card;
