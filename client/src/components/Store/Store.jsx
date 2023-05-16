import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsContainerPds from "../CardsContainerPds/CardsContainerPds";
import { getProducts, orderProducts } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import "./Store.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { images } from "../../constants";
import Intro from "./videoIntro.jsx";
import {
  FaStar,
  FaTag,
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaArrowDown,
  FaArrowUp,
  FaUndo,
} from "react-icons/fa";

const Store = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productsSectionRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);
  const [showArrowButton, setShowArrowButton] = useState(true); // Nuevo estado para controlar la visibilidad del botón

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleSort(e) {
    e.preventDefault();
    setSortOrder(e.target.value);
    dispatch(orderProducts(e.target.value));
  }

  function handleReset() {
    setSortOrder(null);
    dispatch(getProducts());
  }

  const paginatePrd = (pageNumber) => {
    setCurrentPage(pageNumber);
    productsSectionRef.current.scrollIntoView(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const products = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  initMercadoPago("TEST-c64788b2-8aa3-431e-8e04-4295bcce4784");

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;

      // este if verifica si productsSectionRef.current no es null
      if (productsSectionRef.current) {
        const { top } = productsSectionRef.current.getBoundingClientRect();
        setShowArrowButton(top > windowHeight);
      }
    };

    // este if verifica si productsSectionRef.current no es null antes de agregar el evento de desplazamiento
    if (productsSectionRef.current) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      // este if verifica si productsSectionRef.current no es null antes de eliminar el evento de desplazamiento
      if (productsSectionRef.current) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
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
        <ul className="CategoriesStore">
          <li>
            <a role="button">
              <div>
                <FaStar />
                <span>Most Value</span>
              </div>
            </a>
          </li>
          <li>
            <a role="button">
              <div>
                <FaTag />
                <span>Offer</span>
              </div>
            </a>
          </li>
          <li>
            <a role="button">
              <div>
                <FaSortAlphaDown />
                <span>Sort A-Z</span>
              </div>
            </a>
          </li>
          <li>
            <a role="button">
              <div>
                <FaSortAlphaUp />
                <span>Sort Z-A</span>
              </div>
            </a>
          </li>
          <li>
            <a role="button">
              <div>
                <FaArrowDown />
                <span>Min to Max</span>
              </div>
            </a>
          </li>
          <li>
            <a role="button">
              <div>
                <FaArrowUp />
                <span>Max to Min</span>
              </div>
            </a>
          </li>
          <li>
            <a role="button">
              <div>
                <FaUndo />
                <span>Reset</span>
              </div>
            </a>
          </li>
        </ul>
        <div className="divStoreCont">
          <section className="cardsProducts">
            <CardsContainerPds
              start={indexOfFirstProduct}
              end={indexOfLastProduct}
            />
          </section>
        </div>
        <div className="paginationContainer">
          <Pagination
            exercisesPerPage={productsPerPage}
            totalExercises={products.length}
            paginate={paginatePrd}
          />
        </div>
      </div>
    </div>
  );
};

export default Store;

{
  /* <h3>Order For: </h3>
          <section className="sortStore">
            <select value={sortOrder} onChange={handleSort}>
              <option value="A-Z">From A to Z</option>
              <option value="Z-A"> From Z to A </option>
              <option value="minMax">Min Max</option>
              <option value="maxMin">Max Min</option>
            </select>
          </section>
          <h3>Reset Filters</h3>
          <button className="sidebarButton" onClick={handleReset}>
            Reset
          </button>
          <button className="sidebarButton">Most Valued</button>
          <button
            className={`sidebarButtonCategories ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="arrow-categories">⮞</span>
            Categories
          </button>

          {isOpen && (
            <ul className="ButtonCategories">
              <li className="categoriesLi"><button>Protein</button></li>
              <li className="categoriesLi"><button>Pre-Workout</button></li>
              <li className="categoriesLi"><button>Performance</button></li>
              <li className="categoriesLi"><button>Weight Management</button></li>
              <li className="categoriesLi"><button>Vitamins & Health</button></li>
            </ul>
          )} */
}
