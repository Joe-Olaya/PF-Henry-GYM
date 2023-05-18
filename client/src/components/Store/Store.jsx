import { useDispatch, useSelector } from "react-redux";
import CardsContainerPds from "../CardsContainerPds/CardsContainerPds";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { getProducts, orderProducts } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import "./Store.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Store = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const [sortOrder, setSortOrder] = useState(null);

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
  const cart = useSelector((state) => state.cart);
  return (
    <div className="div_container">
      <Navbar />
      <section className="sort">
        <select value={sortOrder} onChange={handleSort}>
          <option value="A-Z">From A to Z</option>
          <option value="Z-A"> From Z to A </option>
          <option value="minMax">Min Max</option>
          <option value="maxMin">Max Min</option>
        </select>
      </section>
      <button
        className="bg-white rounded m-5 p-2 hover:bg-yellow-500 font-bold"
        onClick={handleReset}
      >
        Reset
      </button>
      <section className="productCard">
        <CardsContainerPds
          start={indexOfFirstProduct}
          end={indexOfLastProduct}
        />
      </section>
      <Pagination
        exercisesPerPage={productsPerPage}
        totalExercises={products.length}
        paginate={paginatePrd}
      />
      {cart.map((item) => {
                return (
                    <div>
                        <div>
                            <ShoppingCart
                            name={item.name}
                            price={item.price}                     
                            /> 
                        </div>
                        {/* {console.log(item.id)} */}
                    </div>
                );
            })}
      {/* <div>
      {cart.forEach((e) => {
        return (
        <div>
          <h3 style={{ color: "white" }}>{e.name}</h3>
          <p style={{ color: "white" }}>Price: ${e.price}</p>
        </div>);
      })}
      </div> */}
    </div>
  );
};

export default Store;
