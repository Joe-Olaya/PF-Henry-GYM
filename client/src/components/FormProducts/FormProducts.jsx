import React, { useState, useEffect } from "react";
import axios from "axios";
import "../FormProducts/FormProducts.css";

const FormProducts = () => {
  const [image, setImage] = useState("");
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    stock: 0,
    category: "",
  });
  const [showDescription, setShowDescription] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/categoriesproducts"
        );
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  const setFile = (file) => {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      setInput({
        ...input,
        image: filereader.result,
      });
      setImage(filereader.result);
    };
  };
  const handleSubmit = async () => {
    const postData = {
      ...input,
      categoryproductId: input.category,
    };

    const postRequest = await axios.post(
      "http://localhost:3001/products",
      postData
    );

    console.log(postRequest.data);

    if (postRequest.data === "Product created successfully") {
      alert(postRequest.data);
    } else {
      alert(postRequest.data);
    }
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

  const handleImage = (e) => {
    const file = e.target.files[0];
    file.type.includes("video") || file.type.includes("image")
      ? setFile(file)
      : alert("Archivo no válido");
  };

  return (
    <div className="contFormP">
      <div className="formContainerP">
        <form className="formP" action="">
          <p className="titleP">Create Product</p>
          <p className="messageP">Create a product for your store</p>
          <label>
            <input
              placeholder=""
              type="text"
              className="input"
              name="name"
              value={input.name}
              onChange={handleOnChange}
            />
            <span>Name</span>
          </label>
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
                onChange={handleOnChange}
              />
              <span>Stock</span>
            </label>
          </div>
          <label>
            <select
              className="input"
              name="category"
              value={input.category}
              onChange={handleOnChange}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
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
          <div className="flexP">
            <input
              className="imageFormP"
              type="file"
              accept="image/*"
              required=""
              onChange={handleImage}
              id="file-input"
            />
            {image && <img src={image} className="previewImage" alt="" />}
          </div>
          <button className="submitP" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormProducts;
