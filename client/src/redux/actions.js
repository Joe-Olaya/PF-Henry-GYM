import {
  GET_EXERCISES,
  GET_EXERCISE_BY_ID,
  GET_PRODUCTS,
  GET_USERS,
  POST_REGISTER,
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
