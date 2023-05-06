import { useDispatch, useSelector } from "react-redux";
import CardsContainerPds from "../CardsContainerPds/CardsContainerPds";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/actions";

const Store = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return(
        <div className="div_container">
            <Navbar/>
            <CardsContainerPds/>
        </div>
    )
}

export default Store;