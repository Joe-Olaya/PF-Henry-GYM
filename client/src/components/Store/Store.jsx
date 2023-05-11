import { useDispatch, useSelector } from "react-redux";
import CardsContainerPds from "../CardsContainerPds/CardsContainerPds";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'



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
    initMercadoPago('TEST-c64788b2-8aa3-431e-8e04-4295bcce4784');

    return(
        
        <div className="div_container">
             <div id="wallet_container">
              </div>
              
            <Navbar/>
            <section className="productCard">
            <CardsContainerPds start={indexOfFirstProduct} end={indexOfLastProduct}/>
            </section>
            <Pagination
                exercisesPerPage={productsPerPage}
                totalExercises={products.length}
                paginate={paginatePrd}
            />
            <button>
             <Wallet initialization={{ preferenceId: '240811749-8dfa722c-9a66-44f0-a325-7f0123f3f20d'}}/>
             </button>
        </div>
    )
}

export default Store;