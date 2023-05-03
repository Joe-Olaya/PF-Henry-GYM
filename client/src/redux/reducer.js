import {
  GET_EXERCISES,
  GET_EXERCISE_BY_ID,
  GET_PRODUCTS,
  GET_USERS,
  POST_REGISTER,
  FILTER_BY_MUSCLE,
  ORDER_BY_NAME,
  GET_NAME_EXERCISES
} from "./action_types";

const initialState = {
  exercise: [],
  exercises: [],
  exercisesOrigin: [],
  products: [],
  users: [],
  //register:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXERCISES:
      console.log(action.payload)
      return {
        ...state,
        exercises: action.payload,
        exercisesOrigin: action.payload,
      };
    case GET_EXERCISE_BY_ID:
      return {
        ...state,
        exercise: action.payload,
      };
    case GET_NAME_EXERCISES:
      return {
        ...state,
        exercises: action.payload
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
      
      case POST_REGISTER:
        return {
          ...state,
        };
    case FILTER_BY_MUSCLE: 
    const muscles = state.exercisesOrigin.filter(el => el.muscle === action.payload)
      return{
         ...state,
         exercises: muscles
      };
    case ORDER_BY_NAME:
     const sortedArr = action.payload === 'A-Z'?
    [].concat(state.exercises).sort(function(a, b){
          if(a.name > b.name) {
             return 1;
          }
          if (b.name > a.name){
            return -1;
          }
          return 0
     }):
    [].concat(state.exercises).sort(function(a, b){
      if (a.name > b.name) {
        return-1;
      }
       if (b.name > a.name){
        return 1;
       }
       return 0;
     })
      return {
        ...state,
        exercises: sortedArr
      } ; 

    


    default:
      return { ...state };

     
  }
};

export default rootReducer;
