import { useState } from "react";
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
  });
  const [showDescription, setShowDescription] = useState(true);

  const setFile = (file) => {
    //funcion que convierte la imagen en datos legibles
    const filereader = new FileReader(); //metodo que convierte en codigo base 64
    filereader.readAsDataURL(file); //leemos la data que devuelve
    filereader.onload = () => {
      //le decimos que hacer
      setInput({
        ...input,
        image: filereader.result,
      });
      setImage(filereader.result);
    };
  };

  const handleSubmit = async () => {
    const postRequest = await axios.post(
      "http://localhost:3001/products",
      input
    );
    console.log(postRequest.data);
    if (postRequest.data == "Product created successfully") {
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
    const file = e.target.files[0]; ///accedemos a la imagen/video que vamos a subir
    file.type.includes("video") || file.type.includes("image") ///si recibimos videos o imagenes haremos la subida en el input file
      ? setFile(file)
      : alert("Archivo no valido"); ///si no lanzo una alerta de que el archivo no es valido(probado que funciona con un archivo zip,rar)
    //aunque tambien se podria implementar
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
            <img src={image} className="previewImage" />
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
