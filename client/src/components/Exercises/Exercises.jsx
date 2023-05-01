import CardsContainer from "../CardsContainer/CardsContainer";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getExercises } from "../../redux/actions";

const Exercises = () => {

    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(getExercises());
    },[])

    return (
        <>
        <CardsContainer/>
        </>
    );
};

export default Exercises;