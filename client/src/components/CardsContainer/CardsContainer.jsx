import Card from "../Card/Card";
import { useSelector } from "react-redux";
import "./CardsContainer.css";

const CardsContainer = ({ start, end }) => {
  //Agregamos los parámetros start y end para representar el rango de índices de exercises que se mostrarán en esta página
  const exercises = useSelector((state) => state.exercises);

  return (
    <div className="exercise">
      {exercises.slice(start, end).map((exercise) => {
        //Utilizamos el método slice() para mostrar solo las cards correspondientes a la página actual
        return (
          <div className="exercise" key={exercise.id}>
            <div className="cardExercise">
            <Card 
              id={exercise.id}
              name={exercise.name}
              gif_url={exercise.gif_url}
              muscle={exercise.muscle}
              body_part={exercise.body_part}
            />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardsContainer;
