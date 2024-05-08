import { GET_JOB_DETAILS_ERROR, GET_JOB_DETAILS_LOADING, GET_JOB_DETAILS_SUCCESS, } from "../actions/types";

const initial_state = {
    loading: true,
    data: []
}

export default function(state = initial_state, action) {
    switch(action.type){
        case GET_JOB_DETAILS_LOADING:
            return {
                ...state,
            }
        case GET_JOB_DETAILS_SUCCESS: 
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case GET_JOB_DETAILS_ERROR: 
            return {
                ...state,
                loading: false,
                data: null
            }
        default:
            return state;
    }
}