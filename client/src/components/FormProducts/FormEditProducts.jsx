import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../FormProducts/FormProducts.css";

// let navigate = useNavigate();
const FormEditProducts = ({ productId, name }) => {
  const [input, setInput] = useState({
    name: name || "",
    price: 0,
    stock: 0,
    description: "",
  });
  const [showDescription, setShowDescription] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products/${productId}`);
        const { name, price, stock, description } = response.data;
        setInput({ name, price, stock, description });
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchProduct();
  }, [productId]);


  const handleSubmit = async () => {
    const putData = {
      price: input.price,
      stock: input.stock,
      description: input.description,
    };

    try {
      const putRequest = await axios.put(
        `/products/${productId}`,
        putData
      );
      alert("Product updated successfully");
      window.location.href = 'https://suppliesandtraining.vercel.app/dashboard';
    } catch (error) {
      console.log(error);
      alert("Failed to update product");
    }
    // navigate("/dashboard")
  };

  const handleDescriptionClick = () => {
    setShowDescription(false);
  };

  const handleDescriptionBlur = () => {
    setShowDescription(true);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="formContainerE">
      <form className="formP" action="">
        <p className="titleP">Edit Product - {input.name}</p>{" "}
        <p className="messageP">Update product information</p>
        <div className="flexP">
          <label>
            <input
              placeholder=""
              className="input"
              type="number"
              name="price"
              value={input.price}
              onChange={handleOnChange}
            />
            <span>Price</span>
          </label>
          <label>
            <input
              placeholder=""
              className="input"
              type="number"
              name="stock"
              value={input.stock}
              onChange={handleOnChange}
            />
            <span>Stock</span>
          </label>
        </div>
        <label>
          <textarea
            placeholder=""
            className="input"
            type="text"
            name="description"
            value={input.description}
            onChange={handleOnChange}
            onClick={handleDescriptionClick}
            onBlur={handleDescriptionBlur}
          />
          {showDescription && <span>Description</span>}
        </label>
        <button className="submitP" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormEditProducts;
