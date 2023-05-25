import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import StarRatings from "react-star-ratings";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [actualCart, setActualCart] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const product = useSelector(state =>
    state.products.find(product => product.id === parseInt(productId))
  );

  useEffect(
    () => {
      const fetchComments = async () => {
        try {
          const response = await axios.get(`/reviews?productId=${productId}`);
          setComments(response.data.comments);
        } catch (error) {
          console.log(error);
        }
      };

      const fetchPunctuation = async () => {
        try {
          const response = await axios.get(
            `/punctuation?productId=${productId}`
          );
          setRating(response.data.punctuation);
        } catch (error) {
          console.log(error);
        }
      };

      fetchComments();
      fetchPunctuation();
    },
    [productId]
  );

  if (!product) {
    return <div>Loading...</div>;
  }

  const saveLocal = item => {
    const updatedCart = [...actualCart, item];
    localStorage.setItem("carrito", JSON.stringify(updatedCart));
    setActualCart(updatedCart);
  };

  const addComment = async () => {
    if (commentText.trim() !== "") {
      const newComment = commentText.trim();
      const userId = JSON.parse(localStorage.getItem("userId")) || [];
      const saveLocal = () => {
        localStorage.setItem("userId", JSON.stringify(userId));
      };

      if (userId) {
        console.log(userId);
      } else if (!userId) {
        userId = null;
      }

      try {
        const response = await axios.post("/reviews", {
          review: newComment,
          userId: userId,
          punctuation: rating
        });
        console.log(response.data);
        setComments((prevComments) => {
          if (Array.isArray(prevComments)) {
            return [...prevComments, newComment];
          } else {
            return [newComment];
          }
        });
        setCommentText("");
        setRating(0);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const userId = JSON.parse(localStorage.getItem("userId")) || [];
  // const saveLocal = () => {
  //   localStorage.setItem("userId", JSON.stringify(userId));
  // };

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
            <button
              className="cart"
              onClick={() => saveLocal({ product, quantity })}
            >
              Add {quantity} to cart
            </button>
          </div>
        </div>
      </div>

      <div className="reviews_producDetail">
        <div className="comments">
          {comments && comments.length !== 0
            ? comments.map((comment, index) =>
                <div key={index} className="comments">
                  <p>
                    {comment}
                  </p>
                </div>
              )
            : <p className="commetsCount">No comments yet</p>}
          <div className="stars-container">
            <StarRatings
              rating={rating}
              starRatedColor="gold"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
              changeRating={setRating}
            />
          </div>
          <textarea
            placeholder="Add a comment"
            onChange={e => setCommentText(e.target.value)}
          />

          <button className="button_comments" onClick={addComment}>
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
