import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const [userRating, setUserRating] = useState(0);
  const [isRatingEnabled, setIsRatingEnabled] = useState(true);
  const [userCommented, setUserCommented] = useState(false);

  const product = useSelector((state) =>
    state.products.find((product) => product.id === parseInt(productId))
  );

  const fetchComments = async (page) => {
    try {
      const response = await axios.get(
        `/reviews?productId=${productId}&page=${page}`
      );
      setComments(response.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `/reviews?productId=${productId}&page=1`
        );
        setComments(response.data.comments);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPunctuation = async (productId) => {
      try {
        const response = await axios.get(`/punctuation/${productId}`);
        const totalPunctuation = response.data.total;
        setRating(totalPunctuation);
      } catch (error) {
        console.log(error);
      }
    };

    fetchComments();
    fetchPunctuation(productId);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const saveLocal = (item) => {
    const updatedCart = [...actualCart, item];
    localStorage.setItem("carrito", JSON.stringify(updatedCart));
    setActualCart(updatedCart);
  };

  const addComment = async () => {
    if (commentText.trim() !== "") {
      const newComment = commentText.trim();
      let userData = JSON.parse(localStorage.getItem("userData")) || null;
      let userId = userData ? userData.id : null;

      try {
        await axios.post("/reviews", {
          productId,
          review: newComment,
          userId,
          punctuation: userRating,
        });
        fetchComments(1);
        console.log(response.data);
        setCommentText("");
        setIsRatingEnabled(false);
        setUserCommented(true);
        fetchComments(); // Update comments after adding a new comment
      } catch (error) {
        console.log(error);
      }
    }
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
              <h2>{product.name}</h2>
              <div className="stars-container">
                <StarRatings
                  rating={rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="2px"
                  isSelectable={false}
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
          {/* Show existing comments */}
          {comments && comments.length !== 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="comments">
                <p>{comment}</p>
                {/* ... */}
              </div>
            ))
          ) : (
            <p className="commentsCount">No comments yet</p>
          )}

          {/* Add a new comment */}
          <div className="stars-container">
            <StarRatings
              rating={userRating}
              starRatedColor="gold"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
              isSelectable={isRatingEnabled}
              changeRating={setUserRating}
            />
          </div>
          <textarea
            placeholder="Add a comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
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
