import "./CardProducts.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useSelector } from "react-redux";
import StarRatings from "react-star-ratings";

const CardProducts = (props) => {
  const rating = 4;
  initMercadoPago("APP_USR-61af0d9c-d680-4246-ac67-d35a916e71e8");
  const products = useSelector((state) => state.products);
   
  const getidmercadopago = async () => {
    let product = {
      items: [
        {
          title: props.name,
          unit_price: 10,
          quantity: props.price,
        },
      ],
    };
    const peticion = await axios.post(
      "http://localhost:3001/mpcompra",
      product
    );
    setId(peticion.data);
  };

  return (
    <div className="cardPrd">
      <Link className="LinkEstilo" to={`/products/${props.id}`}>
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
          <h2 className="titlePrd">{props.name}</h2>
          <div className="etiquet-price">
            <p>{props.price}</p>
            <div></div>
          </div>
          <div className="descriptionPrd">
          <p>{props.price}</p>
          
            {/* <h1> 

            {props.description}
          </h1> */}
        </div>
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
