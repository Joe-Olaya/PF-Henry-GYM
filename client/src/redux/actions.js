import {
  FILTER_BY_MUSCLE,
  GET_EXERCISES,
  GET_EXERCISE_BY_ID,
  GET_PRODUCTS,
  GET_USERS,
  POST_REGISTER,
  ORDER_BY_NAME
} from "./action_types";
import axios from "axios";

const URL = "http://localhost:3001";

export const getExercises = () => {
  return async function (dispatch) {
    const exercisesData = (await axios.get(`${URL}/exercises`)).data;
    dispatch({
      type: GET_EXERCISES,
      payload: exercisesData,
    });
  };
};

export const getExerciseById = (idExercise) => {
  return async function (dispatch) {
    const exerciseData = (await axios.get(`${URL}/exercises/${idExercise}`))
      .data;
    dispatch({
      type: GET_EXERCISE_BY_ID,
      payload: exerciseData,
    });
  };
};

export const getUsers = () => {
  return async function (dispatch) {
    const usersData = (await axios.get(`${URL}/users`)).data;
    dispatch({
      type: GET_USERS,
      payload: usersData,
    });
  };
};
export function postRegister(payload){
  console.log(payload)
  return async function(dispatch) {
      try {
          console.log(payload)
          const registerData = await axios.post(`${URL}/register`, payload)
          console.log(registerData)
          return registerData

      }catch(errors){
          console.log(errors);
      }
  }
};

export const filterByMuscle = (muscle) => {
  return {
      type: FILTER_BY_MUSCLE,
      payload: muscle
    };
     };
     export function getNameExercises(name){
      return async function (dispatch) {
         try {
           var json = await axios.get(`${URL}/exercises?name=${name}`);
           console.log(json.data)
           return dispatch ({
              type: 'GET_NAME_EXERCISES', 
              payload: json.data
           }) 
           
         } catch (error) {
            console.log(error.message)
         }};
    };


 export const orderByName = (payload) => {
   return {
     type: ORDER_BY_NAME,
      payload
   };
};  


