import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const rating = 4;
  const [quantity, setQuantity] = useState(1);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const product = useSelector(state =>
    state.products.find(product => product.id === parseInt(productId))
  );

  if (!product) {
    return <div>Loading...</div>;
  }

  const addComment = () => {
    if (commentText.trim() !== "") {
      const newComment = commentText.trim();
      axios
        .post("http://localhost:3001/reviews", { review: newComment })
        .then(response => {
          console.log(response.data);
          setComments(prevComments => [...prevComments, newComment]);
          setCommentText("");
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  const ratings = document.getElementsByName("rating");

  function handleRatingChange(event) {
    const selectedRating = event.target.value;
    console.log("Valoración seleccionada:", selectedRating);
  }

  const data = {
    rating: selectedRating
  }

  fetch('/reviews', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok){
      console.log("Valoración enviada");

    } else {
      console.log("Error al enviar la valoración");
    }
  })
  .catch(error => {
    console.error("Error en la solicitud", error);
  });


  for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener("change", handleRatingChange);
  }


  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  return (
    <div className="divDetail">
      <div className="productDetail">
        <div className="details">
          <div className="big-img">
            <img src={product.image} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>
                {product.name}
              </h2>
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
            <p>
              {product.description}
            </p>
            <div className="price">
              ${product.price}
            </div>
            <div className="quantity">
              <button
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}
              >
                -
              </button>
              <span>
                {quantity}
              </span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="cart">
              Add {quantity} to cart
            </button>
          </div>
        </div>
      </div>
      <form>
        <div className="reviews_producDetail">
          <div className="comments">
            {comments.length === 0
              ? <p className="commetsCount">No comments yet</p>
              : comments.map((comment, index) =>
                  <div key={index} className="comments">
                    <p>
                      {comment}
                    </p>
                  </div>
                )}

            <textarea
              // rows="4"
              placeholder="Add a comment"
              onChange={e => setCommentText(e.target.value)}
            />

            <button className="button_comments" onClick={addComment}>
              Add Comment
            </button>
          </div>
        </div>
        <div className="raiting">
          <input type="radio" id="star5" name="rating" value="5" />
          <label for="star5" />
          <input type="radio" id="star4" name="rating" value="4" />
          <label for="star4" />
          <input type="radio" id="star3" name="rating" value="3" />
          <label for="star3" />
          <input type="radio" id="star2" name="rating" value="2" />
          <label for="star2" />
          <input type="radio" id="star1" name="rating" value="1" />
          <label for="star1" />
        </div>
      </form>
    </div>
  );
};

export default ProductDetails;
