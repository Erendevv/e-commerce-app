import initialState from "./initialState";
import * as actionTypes from '../actions/actionTypes'

export default function productReducer(state=initialState.products,action){
    switch (action.type) {
        case actionTypes.GET_PRODUCTS:
            return action.payload
            default:
                return state;
    }
}