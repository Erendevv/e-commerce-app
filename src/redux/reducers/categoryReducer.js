import initialState from "./initialState";
import * as actionTypes from '../actions/actionTypes'

export default function categoryReducer(state=initialState.categories,action){
    switch (action.type) {
        case actionTypes.GET_CATEGORIES:
            return action.payload 
        default:
            return state;
    }
}