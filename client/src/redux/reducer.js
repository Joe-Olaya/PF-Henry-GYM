import {
  GET_EXERCISES,
  GET_EXERCISE_BY_ID,
  GET_PRODUCTS,
  GET_USERS,
  POST_REGISTER,
  FILTER_BY_MUSCLE,
  ORDER_BY_NAME,
  GET_NAME_EXERCISES,
  POST_PRODUCT_CREATE,
  ORDER_PRODUCTS,
  GET_NAME_PRODUCTS,
  ADD_PRODUCTS,
} from "./action_types";

export const initialState = {
  exercise: [],
  exercises: [],
  exercisesOrigin: [],
  products: [],
  users: [],
  //register:[],
  cart:[],
  
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
      case GET_PRODUCTS:
        return {
          ...state,
          products: action.payload,
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
      case POST_PRODUCT_CREATE:
        return {
          ...state,
        };
        case ORDER_PRODUCTS:
      let products;
      if (action.payload === "A-Z" || action.payload === "Z-A") {
        products = state.products.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        if (action.payload === "Z-A") products = products.reverse();
      }
      if (action.payload === "minMax" || action.payload === "maxMin") {
        products = state.products.sort((a, b) => {
          return a.price - b.price;
        });
        if (action.payload === "maxMin") products = products.reverse();
      }

      return {
        ...state,
        products,
      };
      case GET_NAME_PRODUCTS:
        return {
          ...state,
          products: action.payload
        };

    
      case ADD_PRODUCTS:
        let item = action.payload
        let id = item.id
        localStorage.setItem(id, JSON.stringify(item))
        let services = JSON.parse(localStorage.getItem(id))
   
        return {
          ...state,
          cart: [...state.cart, services]}


    default:
      return { ...state };

     
  }
};

export default rootReducer;
