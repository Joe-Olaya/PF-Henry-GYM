import CardsContainer from "../CardsContainer/CardsContainer";
import { useEffect, useState } from "react"; //Agregamos useState para mantener el número actual de la página
import { useDispatch, useSelector } from "react-redux";
import { getExercises } from "../../redux/actions";
import Pagination from "../Pagination/Pagination.jsx";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters"
import "./Exercises.css"


const Exercises = () => {

const dispatch = useDispatch();
useEffect(() => {
dispatch(getExercises());
},[])

const paginate= (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const exercises = useSelector(state=>state.exercises); //Obtenemos el array de exercises del estado global
const [currentPage, setCurrentPage] = useState(1); //Agregamos un estado local para mantener el número de la página actual
const exercisesPerPage = 9; //Definimos el número máximo de exercises que se mostrarán por página

const indexOfLastExercise = currentPage * exercisesPerPage; //Calculamos el índice del último exercise que se mostrará en la página actual
const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage; //Calculamos el índice del primer exercise que se mostrará en la página actual

const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise); //Obtenemos el subconjunto de exercises correspondiente a la página actual

return (
<div className="div_container">
<section className="ser">
<SearchBar/>
</section>
<section className="fil">
<Filters/>
</section>
<section className="exerCard">
<CardsContainer start={indexOfFirstExercise} end={indexOfLastExercise} />
</section>
<Pagination
        exercisesPerPage={exercisesPerPage}
        totalExercises={exercises.length}
        paginate={paginate}
      />
</div>
);
};

export default Exercises;