import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderByName, getExercises, filterByMuscle } from "../../redux/actions";
import "../Filters/filters.css";

const Filters = () => {
  const [muscle, setMuscle] = useState([]);
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const dispatch = useDispatch();
  const exercise = useSelector((state) => state.exercisesOrigin);

  useEffect(() => {
    dispatch(getExercises());
  }, [dispatch]);

  useEffect(() => {
    function guardarMusculo() {
      const muscleFilter = exercise.map((i) => i.muscle);
      const deleteDuplicates = muscleFilter.filter(
        (item, index) => muscleFilter.indexOf(item) === index
      );
      setMuscle(deleteDuplicates);
    }
    guardarMusculo();
  }, [exercise]);

  function handleSort(e) {
    e.preventDefault();
    setSortOrder(e.target.value);
    dispatch(orderByName(e.target.value));
  }

  function handleSelect(e) {
    e.preventDefault();
    setSelectedMuscle(e.target.value);
    dispatch(filterByMuscle(e.target.value));
  }

  function handleReset() {
    setSelectedMuscle(null);
    setSortOrder(null);
    dispatch(getExercises());
  }

  return (
    <div className="options">
      <section className="muscle">
        {/* <button onClick={()=>console.log(exercise)}>ver estado</button> */}
        <select value={selectedMuscle} onChange={handleSelect}>
          <option hidden defaultValue>
            {" "}
            Select Muscle{" "}
          </option>
          {muscle.map((i, key) => (
            <option key={key} value={i}>
              {" "}
              {i}{" "}
            </option>
          ))}
        </select>
      </section>

      {/* ordenamientos  */}
      <section className="sort">
        <select value={sortOrder} onChange={handleSort}>
          <option value="A-Z">From A to Z</option>
          <option value="Z-A"> From Z to A </option>
        </select>
      </section>

      <button className="bg-white rounded m-5 p-2 hover:bg-yellow-500 font-bold" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Filters;
