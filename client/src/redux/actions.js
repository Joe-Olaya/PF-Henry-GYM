import {
  FILTER_BY_MUSCLE,
  GET_EXERCISES,
  GET_EXERCISE_BY_ID,
  GET_PRODUCTS,
  GET_USERS,
  POST_REGISTER,
  ORDER_BY_NAME,
  POST_PRODUCT_CREATE,
  ORDER_PRODUCTS,
  GET_NAME_PRODUCTS,
  DISABLE_USER,
  REACTIVE_USER
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

export const getProducts = () => {
  return async function (dispatch) {
    const productsData = (await axios.get(`${URL}/products`)).data;
    dispatch({
      type: GET_PRODUCTS,
      payload: productsData,
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
      payload: usersData.results,
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

export function deleteUser(id){
  return async function(dispatch){
      const userDelete = await axios.delete(`${URL}/users/${id}`)
     
      return dispatch({
        type: DISABLE_USER
      });
  };
};


export function reactiveUser(id){
  return async function(dispatch){
      const userReactive = await axios.post(`${URL}/users/${id}`)
    
      return dispatch({
        type: REACTIVE_USER
      });
  };
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
    export function postProductCreate(payload){
      console.log(payload)
      return async function(dispatch) {
          try {
              //console.log(payload)
              const createProduct = await axios.post(`${URL}/products`, payload)
              console.log(createProduct)
              return createProduct
    
          }catch(errors){
              console.log(errors);
          }
      }
    };

 export const orderByName = (payload) => {
   return {
     type: ORDER_BY_NAME,
      payload
   };
};

export function orderProducts(payload) {
  return { type: ORDER_PRODUCTS, payload };
};

export function getNameProducts(name){
  return async function (dispatch) {
     try {
       var json = await axios.get(`${URL}/products?name=${name}`);
       console.log(json.data)
       return dispatch ({
          type: GET_NAME_PRODUCTS, 
          payload: json.data
       })
      } catch (error) {
        console.log(error.message)
     }};
};