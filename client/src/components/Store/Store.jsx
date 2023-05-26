import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CardsContainerPds from "../CardsContainerPds/CardsContainerPds";
import { getProducts } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import "./Store.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { images } from "../../constants";
import Intro from "./videoIntro.jsx";
import { FaStar, FaTag, FaArrowDown, FaArrowUp } from "react-icons/fa";

const Store = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [orderBy, setOrderBy] = useState("id");
  const [order, setOrder] = useState("ASC");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const fetchProducts = async () => {
    try {
      const params = {
        page: currentPage,
        size: 9,
        name: searchQuery,
        orderBy: orderBy,
        order,
        state: "active",
        offer: selectedFilters.includes("Offer"),
        categoryproductId: selectedCategoryId,
      };

      const response = await axios.get("/products", {
        params: params,
      });

      dispatch(getProducts(response.data.filteredProducts));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/categoriesproducts");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategorySelectChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategoryId(categoryId);
  };

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    const isFilterSelected = selectedFilters.includes(filterValue);

    let newOrder = order;
    if (filterValue === "Min to Max") {
      newOrder = "ASC";
    } else if (filterValue === "Max to Min") {
      newOrder = "DESC";
    }

    if (isFilterSelected) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== filterValue)
      );
    } else {
      setSelectedFilters([...selectedFilters, filterValue]);
    }

    if (filterValue === "Offer") {
      setOrder(newOrder);
    } else {
      setOrderBy(filterValue);
      setOrder(newOrder);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchProducts();
  };

  const productsSectionRef = useRef(null);
  const [showArrowButton, setShowArrowButton] = useState(true);

  const paginatePrd = (pageNumber) => {
    setCurrentPage(pageNumber);
    productsSectionRef.current.scrollIntoView(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const products = useSelector((state) => state.products);
  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.categoryproductId === selectedCategory.id
      )
    : products;

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  initMercadoPago("TEST-c64788b2-8aa3-431e-8e04-4295bcce4784");

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;

      if (productsSectionRef.current) {
        const { top } = productsSectionRef.current.getBoundingClientRect();
        setShowArrowButton(top > windowHeight);
      }
    };

    if (productsSectionRef.current) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (productsSectionRef.current) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <div
        className="app__header__store app__wrapper__store flex__center section__padding__store"
        id="home"
      >
        <div className="app__wrapper_img_store">
          <img src={images.imageIntro} alt="header_img" />
        </div>
      </div>
      {showArrowButton && (
        <a href="#products">
          <button className="arrowButton">
            <div className="arrow-down"></div>
          </button>
        </a>
      )}
      <div className="videoIntro">
        <Intro />
      </div>
      <div className="stilesProducts" id="products" ref={productsSectionRef}>
        <div className="store-wrapper">
          <div className="category_list">
            <div className="searchDiv">
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  className="searchStile"
                  placeholder="Search..."
                  name="search"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                <button className="search__button" type="sumbit">
                  <svg
                    className="search__icon"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                </button>
              </form>
            </div>
            <hr className="lineDivider" />
            <h2 className="h2Text">Categories:</h2>
            <div className="inputGroup">
              <select
                name="category"
                className="selectCategories"
                value={selectedCategoryId}
                onChange={handleCategorySelectChange}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <hr className="lineDivider" />
            <h2 className="h2Text">Filters:</h2>
            <div className="inputGroup">
              <select
                className="selectCategories"
                id="orderBy"
                name="orderBy"
                value={orderBy}
                onChange={(e) => setOrderBy(e.target.value)}
              >
                <option value="id">ID</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="average_score">Average Score</option>
                <option value="stock">Stock</option>
              </select>
            </div>
            <div className="inputGroup">
              <input
                id="option2"
                name="option2"
                type="checkbox"
                onChange={handleFilterChange}
                value="Offer"
              />
              <FaTag className="iconCategory" />
              <label htmlFor="option2">Offer</label>
            </div>
            <div className="inputGroup">
              <input
                id="radio1"
                name="radio"
                type="radio"
                onChange={handleFilterChange}
                value="Min to Max"
              />
              <FaArrowDown className="iconCategory" />
              <label htmlFor="radio1">Min to Max</label>
            </div>
            <div className="inputGroup">
              <input
                id="radio2"
                name="radio"
                type="radio"
                onChange={handleFilterChange}
                value="Max to Min"
              />
              <FaArrowUp className="iconCategory" />
              <label htmlFor="radio2">Max to Min</label>
            </div>
          </div>
          <div className="divStoreCont">
            <section className="cardsProducts">
              <CardsContainerPds
                products={filteredProducts}
                start={indexOfFirstProduct}
                end={indexOfLastProduct}
                selectedCategory={selectedCategory}
              />
            </section>
          </div>
        </div>
      </div>
      <div className="pagination">
        <Pagination
          exercisesPerPage={productsPerPage}
          totalExercises={products.length}
          paginate={paginatePrd}
        />
      </div>
    </div>
  );
};

export default Store;
