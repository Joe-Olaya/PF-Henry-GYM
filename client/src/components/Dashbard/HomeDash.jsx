import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, getUsers } from "../../redux/actions";
import { RiCloseCircleFill, RiCheckFill, RiPencilFill } from "react-icons/ri";
import FormProducts from "../FormProducts/FormProducts.jsx";
import "./style.css";

function HomeDash({
  Toggle,
  GeneralSection,
  ProductsSection,
  UserSection,
  SalesSection,
}) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const users = useSelector((state) => state.users);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [activeProductIds, setActiveProductIds] = useState([]);
  const [updatedProducts, setUpdatedProducts] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers());
  }, []);
  useEffect(() => {
    const activeProducts = products.filter(
      (product) => product.state === "Active"
    );
    const activeProductIds = activeProducts.map((product) => product.id);
    setActiveProductIds(activeProductIds);
    setUpdatedProducts(products);
  }, [products]);

  const openPopup = (index) => {
    setSelectedProductIndex(index);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const deactivateProduct = (productId) => {
    fetch(`/products/${productId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedProductIndex = updatedProducts.findIndex(
          (product) => product.id === productId
        );
        if (updatedProductIndex !== -1) {
          const updatedProductsCopy = [...updatedProducts];
          updatedProductsCopy[updatedProductIndex].state = "Inactive";
          setUpdatedProducts(updatedProductsCopy);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const activateProduct = (productId) => {
    fetch(`/products/${productId}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedProductIndex = updatedProducts.findIndex(
          (product) => product.id === productId
        );
        if (updatedProductIndex !== -1) {
          const updatedProductsCopy = [...updatedProducts];
          updatedProductsCopy[updatedProductIndex].state = "Active";
          setUpdatedProducts(updatedProductsCopy);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="px-1">
      <Nav Toggle={Toggle} />

      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{users.length}</h3>
                <p className="fs-5">Users</p>
                <i className="bi bi-people p-3 fs-1"></i>
              </div>
            </div>
          </div>

          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{products.length}</h3>
                <p className="fs-5">Products</p>
                <i className="bi bi-cart-plus p-3 fs-1"></i>
              </div>
            </div>
          </div>

          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">250</h3>
                <p className="fs-5">Sales</p>
                <i className="bi bi-currency-dollar p-3 fs-1"></i>
              </div>
            </div>
          </div>

          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">270</h3>
                <p className="fs-5">Routines</p>
                <i className="bi bi-universal-access p-3 fs-1"></i>
              </div>
            </div>
          </div>

          {UserSection && (
            <section>
              <table className="table caption-top bg bg-white rounded">
                <caption className="text-white fs-4">Users </caption>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Dni</th>
                    <th scope="col">Phone</th>
                    <th scope="col">State</th>
                  </tr>
                </thead>

                <tbody className=" ">
                  {users.map((i, key) => (
                    <tr key={key}>
                      <th scope="row">{key + 1}</th>
                      <td>{i.name}</td>
                      <td>{i.email}</td>
                      <td>{i.address}</td>
                      <td>{i.dni}</td>
                      <td>{i.phone}</td>
                      <td>{i.state}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {ProductsSection && (
            <section>
              <caption className="text-white fs-4">Products </caption>
              <Link to="/formProducts">
                <button className="btn btn-warning mb-3">Add Product!</button>
              </Link>
              <table className="table caption-top bg bg-white rounded">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">State</th>
                    <th scope="col">Image</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>

                <tbody className=" ">
                  {updatedProducts.map((i, key) => (
                    <tr key={key}>
                      <th scope="row">{key + 1}</th>
                      <td>{i.name}</td>
                      <td>{i.price}</td>
                      <td>{i.stock}</td>
                      <td>{i.state}</td>
                      <td>
                        <button
                          onClick={() => openPopup(key)}
                          className="buttonImage"
                        >
                          Ver imagen
                        </button>
                      </td>
                      <td>
                        <div className="d-flex">
                          <button
                            className="btn btn-danger me-1"
                            onClick={() => deactivateProduct(i.id)}
                          >
                            <RiCloseCircleFill />
                          </button>
                          <button
                            className="btn btn-success me-1"
                            onClick={() => activateProduct(i.id)}
                          >
                            <RiCheckFill />
                          </button>
                          <button className="btn btn-primary">
                            <RiPencilFill />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
        </div>
      </div>

      {popupOpen && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-inner" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={() => setPopupOpen(false)}>
              X
            </button>
            <img src={products[selectedProductIndex].image} alt="Product" />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeDash;
