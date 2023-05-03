import "./Home.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Home = () => {
  const exercises = useSelector((state) => state.exercises);
  const limitedExercises = exercises.slice(0, 4);
  return (
      
    <div className="div_container">
     
      <div className="div_container_exercises">
        <section className="section_title">
          <h1>Supplies & Training</h1>
          <h3>Wanna train something today?</h3>
          <h3>See all the exercises we have for you</h3>
        </section>
        <section className="section_cards">
          <h1>EXERCISES</h1>
          <div className="card_container">
            {limitedExercises.map((exercise) => {
              return (
                <div className="card_section" key={exercise.id}>
                  <h2>{exercise.name}</h2>
                  <h3>{exercise.muscle}</h3>
                  <h3>{exercise.body_part}</h3>
                  <img src={exercise.gif_url} alt="exercise_name" />
                </div>
              );
            })}
          </div>
          {/* <div className="card_container">
            <div className="card_section">
              <img src="" alt="SIN IMAGEN" />
              <h2>Titulo del ejercicio</h2>
            </div>

            <div className="card_section">
              <img src="" alt="SIN IMAGEN" />
              <h2>Titulo del ejercicio</h2>
            </div>

            <div className="card_section">
              <img src="" alt="SIN IMAGEN" />
              <h2>Titulo del ejercicio</h2>
            </div>

            <div className="card_section">
              <img src="" alt="SIN IMAGEN" />
              <h2>Titulo del ejercicio</h2>
            </div>
          </div> */}

          <div className="div_button">
            <button className="button_Viewall"><Link to='/exercises'>View more</Link></button>
          </div>
        </section>
      </div>
      {/*       <div className="div_container_store">
        <section className="section_cards">
          
          <h1>STORE</h1>

          <div className="card_container">
            
            <div className="card_section">
              <img src="" alt="SIN IMAGEN" />
              <h2>Titulo del item de la store</h2>
            </div>
            
            <div className="card_section">
              <img src="" alt="SIN IMAGEN" />
              <h2>Titulo del item de la store</h2>
            </div>
            
            <div className="card_section">
              <img src="" alt="SIN IMAGEN" />
              <h2>Titulo del item de la store</h2>
            </div>
            
            <div className="card_section">
              <img src="" alt="SIN IMAGEN" />
              <h2>Titulo del item de la store</h2>
            </div>
            
          </div>
          
            <div className="div_button">
                <button className="button_Viewall">View more</button>
            </div>
        
        </section>
        //solo de prueba 
      </div> */}
      <div className="flex justify-center "></div>
    </div>
  );
};
