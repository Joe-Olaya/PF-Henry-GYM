import "./CardProducts.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import {Addcart} from '../../redux/actions'
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import StarRatings from "react-star-ratings";

const CardProducts = (props) => {
  const rating = 4;
  initMercadoPago("APP_USR-61af0d9c-d680-4246-ac67-d35a916e71e8");
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector ((state) => state.cart)


  const onAddProduct = (id) =>{
     const item = products.filter(i=>i.id===id)
     console.log(item)
  dispatch(Addcart(item[0]))}
         
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
          <div class="etiquet-price">
            <p>{props.price}</p>
            <div></div>
          </div>
          <div className="descriptionPrd">
            {/* <h1> 

            {props.description}
          </h1> */}
        </div>
        <button button onClick={()=> onAddProduct(props.id)} className="w-1/3 flex justify-center items-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green-500 text-white text-lg font-bold" > Add to Cart </button>

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
