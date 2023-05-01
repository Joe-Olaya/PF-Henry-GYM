import {
  GET_EXERCISES,
  GET_EXERCISE_BY_ID,
  GET_PRODUCTS,
  GET_USERS,
  FILTER_BY_MUSCLE
} from "./action_types";

const initialState = {
  exercise: [],
  exercises: [],
  exercisesOrigin: [],
  products: [],
  users: [],

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXERCISES:
      return {
        ...state,
        exercises: action.payload,
        countriesOrigin: action.payload,
      };
    case GET_EXERCISE_BY_ID:
      return {
        ...state,
        exercise: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case FILTER_BY_MUSCLE: 
    const muscles = state.exercises.filter(el => el.muscle === action.payload)
      return{
         ...state,
         exercisesOrigin: muscles

      }


    default:
      return { ...state };
  }
};

export default rootReducer;
