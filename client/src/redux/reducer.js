import {
  GET_EXERCISES,
  GET_EXERCISE_BY_ID,
  GET_PRODUCTS,
  GET_USERS,
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
    default:
      return { ...state };
  }
};

export default rootReducer;
