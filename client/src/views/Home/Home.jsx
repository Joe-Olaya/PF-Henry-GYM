
import "./Home.css";
import Filters from "../../components/Filters/Filters";


export const Home = () => {

  return (
    <div className="div_container">
      <Filters
      />
      <div className="div_container_exercises">
        <section className="section_title">
          <h1>Supplies & Training</h1>
          <h3>Welcome to our website!</h3>
        </section>
        <section className="section_cards">

            <h1>EXERCISES</h1>

          <div className="card_container">
            
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
          </div>
          
          <div className="div_button">
              <button className="button_Viewall">View more</button>
          </div>
        
        </section>
      </div>
      
      <div className="div_container_store">
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
      </div>
    </div>
  );
};

