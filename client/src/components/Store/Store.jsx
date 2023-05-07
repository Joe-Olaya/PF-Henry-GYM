import { useDispatch, useSelector } from "react-redux";
import CardsContainerPds from "../CardsContainerPds/CardsContainerPds";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";

const Store = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const paginatePrd = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const products = useSelector(state => state.products);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return(
        <div className="div_container">
            <Navbar/>
            <section className="productCard">
            <CardsContainerPds start={indexOfFirstProduct} end={indexOfLastProduct}/>
            </section>
            <Pagination
                exercisesPerPage={productsPerPage}
                totalExercises={products.length}
                paginate={paginatePrd}
            />
        </div>
    )
}

export default Store;