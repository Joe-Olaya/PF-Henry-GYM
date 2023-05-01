import { GET_EXERCISES } from './actions'

const initialState = {
    exercises: [],
};

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_EXERCISES:
            return { ...state, exercises:action.payload };

        default:
            return { ...state };
    }
}

export default rootReducer;