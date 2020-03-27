import React, { useReducer } from 'react';
import http from "../../utils/http";
import CasesContext from "./casesContext";
import casesReducer from "./casesReducer";

import {
    GET_PH_CASES,
    GET_PH_FAILED,
    GET_OUTSIDE_CASES,
    GET_OUTSIDE_FAILED
} from "../types";

const CasesState = props => {
    const initialState = {
        ph_cases: null,
        ph_loading: true,
        ph_last_updated: null,
        outside_cases: null,
        outside_loading: true
    }
    const [state, dispatch] = useReducer(casesReducer, initialState);

    const getPHCases = async () => {
        try {
            const res = await http.get('cases');
            dispatch({
                type: GET_PH_CASES,
                payload: res.data,
            })
        } catch(err){
            console.error(err);
        }
    }
    /*
    const getOutsideCases = async () => {
        try {
            const res = await http.get('/cases-outside-ph');
            dispatch({
                type: GET_OUTSIDE_CASES,
                payload: res.data
            })
        } catch(err){
            console.error(err.response.data);
        }
    }
    */
    return(
        <CasesContext.Provider
            value={{
                ph_cases: state.ph_cases,
                ph_loading: state.ph_loading,
                ph_last_updated: state.ph_last_updated,
                oustide_cases: state.outside_cases,
                outside_loading: state.outside_loading,
                getPHCases
            }}
        >
            { props.children }
        </CasesContext.Provider>
    )

}

export default CasesState;