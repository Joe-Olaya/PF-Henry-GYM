import "./CardProducts.css";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const CardProducts = (props) => {
  const rating = 4;
  
  return (
    <div className="cardPrd">
      <Link to={`/products/${props.id}`}>
        <img className="productImg" src={props.image} />
        <div className="starsContainerPreview">
          <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="2px"
          />
        </div>
        <div className="infoPrd">
          <h1 className="titlePrd">
            <p>{props.name}</p>
          </h1>
          <div className
          ="etiquet-price">
            <p>{props.price}</p>
            <div></div>
          </div>
          <div className="descriptionPrd">
            {/* <h1> 

            {props.description}
          </h1> */}
        </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProducts;
