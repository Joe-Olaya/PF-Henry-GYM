import "./Home.css";
import { Link } from "react-router-dom";
import images from "../../constants/images.js";
import Loading from "../../components/Loading/Loading";
import { useState } from "react";

export const Home = () => {

    // LOADER
    const [loading, setLoading] = useState(true);

    const cambiarEstado = () => {
      setTimeout(() =>
        setLoading(false), 3000);
    }

  return (
    <div>
      <div className="sectionExercises">
      {loading ? (
        <div className="div_loader">
        <Loading>{cambiarEstado()}</Loading>
        </div>
      ) : (
        <div className="backExSection">
          <h1 className="h1Title">Supplies & Training</h1>
          <h3 className="h3Text">
            Wanna <span className="palabra-destacada">train</span> something
            today?
          </h3>
          <h3 className="h3Text">
            Look all the <span className="palabra-destacada">exercises</span> we
            have for you
          </h3>
          <div className="carouselExercises">
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <main id="carousel">
              <div className="item">
                <img className="imagesEx" src={images.gif1} />
              </div>
              <div className="item">
                <img className="imagesEx" src={images.gif2} />
              </div>
              <div className="item">
                <img className="imagesEx" src={images.gif3} />
              </div>
              <div className="item">
                <img className="imagesEx" src={images.gif4} />
              </div>
              <div className="item">
                <img className="imagesEx" src={images.gif5} />
              </div>
            </main>
          </div>
          <div className="button-container">
            <Link to="/exercises">
              <button className="exercises-button">Explore Exercises</button>
            </Link>
          </div>
        </div>
        )}
      </div>

      <div className="sectionStore">
        <div className="backStSection">
          <h1 className="h1Store">Store</h1>
          <h3 className="h3TextStore">
            Enjoy the <span className="palabra-destacada">best</span> offers!
          </h3>
          <h3 className="h3TextStore">
            Look all the <span className="palabra-destacada">products</span>{" "}
            available in our store
          </h3>
          <div className="carouselExercises">
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <main id="carousel">
              <div className="item1">
                <img className="imgStore" src={images.store1}></img>
              </div>
              <div className="item1">
                <img className="imgStore" src={images.store2}></img>
              </div>
              <div className="item1">
                <img className="imgStore" src={images.store3}></img>
              </div>
              <div className="item1">
                <img className="imgStore" src={images.store4}></img>
              </div>
              <div className="item1">
                <img className="imgStore" src={images.store5}></img>
              </div>
            </main>
          </div>
          <div className="button-container">
            <Link to="/store">
              <button className="store-button">Explore Store</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
