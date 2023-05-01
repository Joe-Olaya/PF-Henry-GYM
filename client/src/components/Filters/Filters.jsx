import React from 'react';
import { useState, useEffect } from 'react'; 
import {useSelector, useDispatch} from 'react-redux';
import css from '../Filters/Filters.module.css'



const Filters = () => {

  const [muscle, setMuscle]=useState([]) 

  const dispatch = useDispatch();
  const exercise = useSelector(state=>state.exercises)

 useEffect(()=> {
},[])


  return (
  <div>
    <div className={css.options} >
      <button onClick={()=>console.log(exercise)}>ver estado</button>
        <select>
          <option hiden defaultValue> select muscle </option>
         {muscle.map(i =>
          <option value={i}> {i} </option>)}
        </select >
        <button onClick={()=>console.log(muscle)}></button>
          <select>
          </select>
          <select>
          </select>
      </div>
    </div>
  )
}

export default Filters 