import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import "./ProductDetail.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const rating = 4;
  const [quantity, setQuantity] = useState(1);
  
  const product = useSelector((state) =>
  state.products.find((product) => product.id === parseInt(productId))
  );
  
  if (!product) {
    return <div>Loading...</div>;
  }
  
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }
  
  return (
    <div className="divDetail">
      <div className="productDetail">
        <div className="details">
          <div className="big-img">
            <img src={product.image} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{product.name}</h2>
              <div className="stars-container">
                <StarRatings
                  rating={rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="2px"
                />
              </div>
            </div>
            <p>{product.description}</p>
            <div className="price">${product.price}</div>
            <div className="quantity">
              <button
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="cart" onClick={() => {
              carrito.push(product);
              saveLocal();
            }} >Add {quantity} to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductDetails;
