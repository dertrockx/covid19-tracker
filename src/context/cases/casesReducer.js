import {
    GET_PH_CASES,
    GET_PH_FAILED,
    GET_OUTSIDE_CASES,
    GET_OUTSIDE_FAILED
} from "../types";

export default (state, action) => {
    switch(action.type){
        case GET_PH_CASES:
            return {
                ...state,
                ph_cases: action.payload,
                ph_loading: false,
                ph_last_updated: Date.now()
            }
        case GET_OUTSIDE_CASES:
            return {
                ...state,
                outside_cases: action.payload,
                outside_loading: false
            }
    }
}