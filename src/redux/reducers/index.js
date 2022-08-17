import { combineReducers } from "redux";
import productReducer from './productReducer'
import categoryReducer from './categoryReducer'
import changeCategoryReducer from './changeCategoryReducer'

const rootReducer = combineReducers({
    productReducer,
    categoryReducer,
    changeCategoryReducer
})

export default rootReducer;