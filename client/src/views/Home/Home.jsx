import "./Home.css";
import { Link } from "react-router-dom";
import images from "../../constants/images.js";

export const Home = () => {
  return (
    <div>
      <div className="sectionExercises">
        <div className="backExSection">
          <h1 className="h1Title">Supplies & Training</h1>
          <h3 className="h3Text">
            Wanna <span class="palabra-destacada">train</span> something today?
          </h3>
          <h3 className="h3Text">
            See all the <span class="palabra-destacada">exercises</span> we have
            for you
          </h3>
          <div className="carouselExercises">
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <main id="carousel">
              <div class="item">
                <img className="imagesEx" src={images.gif1} />
              </div>
              <div class="item">
                <img className="imagesEx" src={images.gif2} />
              </div>
              <div class="item">
                <img className="imagesEx" src={images.gif3} />
              </div>
              <div class="item">
                <img className="imagesEx" src={images.gif4} />
              </div>
              <div class="item">
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
      </div>

      <div className="sectionStore">
        <div className="backStSection">
          <h1 className="h1Store">Store</h1>
          <h3 className="h3TextStore">
            Wanna <span class="palabra-destacada">train</span> something today?
          </h3>
          <h3 className="h3TextStore">
            See all the <span class="palabra-destacada">products</span>{" "}
            available in our store
          </h3>
          <div className="carouselExercises">
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <main id="carousel">
              <div class="item1">
                <img className="imgStore" src={images.store1}></img>
              </div>
              <div class="item1">
                <img className="imgStore" src={images.store2}></img>
              </div>
              <div class="item1">
                <img className="imgStore" src={images.store3}></img>
              </div>
              <div class="item1">
              <img className="imgStore" src={images.store4}></img>
              </div>
              <div class="item1">
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