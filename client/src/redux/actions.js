import {
  FILTER_BY_MUSCLE,
  GET_EXERCISES,
  GET_EXERCISE_BY_ID,
  GET_PRODUCTS,
  GET_USERS,
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

export const filterByMuscle = (muscle) => {
  return {
      type: FILTER_BY_MUSCLE,
      payload: muscle
    }
     }


