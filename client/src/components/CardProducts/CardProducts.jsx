import "./CardProducts.css";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const CardProducts = (props) => {
  
  return (
    <div className="cardPrd">
      <Link className="LinkEstilo" to={`/products/${props.id}`}>
        <img className="productImg" src={props.image} />
        <div className="starsContainerPreview">
          <StarRatings
            rating={props.average_score}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="2px"
          />
        </div>
        <div className="infoPrd">
          <h2 className="titlePrd">{props.name}</h2>
          <div className="etiquet-price">
            <p>{props.price}</p>
            <div></div>
          </div>
          
            {/* <h1> 

            {props.description}
          </h1> */}
        {/* <div>
          <button onClick={() => console.log(id)}>ver id</button>
          <button onClick={getidmercadopago}>traer info</button>
          <button>
            <Wallet initialization={{ preferenceId: id }} />
          </button>
        </div> */}
        </div>
      </Link>
    </div>
  );
};

export default CardProducts;
