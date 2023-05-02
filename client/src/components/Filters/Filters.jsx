import React from 'react';
import { useState, useEffect } from 'react'; 
import {useSelector, useDispatch} from 'react-redux';
import { orderByName, getExercises, filterByMuscle } from '../../redux/actions';
import css from '../Filters/filters.module.css'



const Filters = () => {

  const [muscle, setMuscle]=useState([])

  const dispatch = useDispatch();
  const exercise = useSelector(state=>state.exercisesOrigin)

     
  useEffect(()=> {
    dispatch(getExercises());
  },[dispatch])
 
  useEffect(()=>{
   function guardarMusculo (){
     const muscleFilter = exercise.map(i=> i.muscle)
     const deleteDuplicates = muscleFilter.filter((item,index)=>muscleFilter.indexOf(item)===index)
     setMuscle(deleteDuplicates)
   } 
   guardarMusculo()
  },[exercise])



function handleSort(e){
  e.preventDefault()
  dispatch(orderByName(e.target.value))
} 

function handleSelect(e){
  e.preventDefault()
  dispatch(filterByMuscle(e.target.value))
}

  return (
  <div>
    <div className={css.options} >
      <button onClick={()=>console.log(exercise)}>ver estado</button>
        <select onChange={handleSelect}>
          <option hidden defaultValue> select muscle </option>
         {muscle.map((i, key) =>
          <option key={key} value={i}> {i} </option>)}
        </select >
 
   {/* ordenamientos  */}
     
      <select onChange={handleSort}>
        <option value="A-Z">From A to Z</option>
        <option value="Z-A"> From Z to A </option>
      </select>
      </div>

   
    </div>
  )
}

export default Filters 