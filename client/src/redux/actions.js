import axios from "axios";
export const GET_EXERCISES = 'GET_EXERCISES';

export const getExercises = () => {
    return async function (dispatch) {
        try {
            const info = await axios.get('http://localhost:3001/exercises');
            return dispatch({
                type: GET_EXERCISES,
                payload: info.data
            });
        } catch (error) {
            // console.log(error);
        };
    }
}