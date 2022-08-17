import * as actionTypes from './actionTypes'

export function getCategoriesSuccess(categories){
    return {
        type:actionTypes.GET_CATEGORIES,
        payload:categories
    }
}
export function changeCategory(currentCategory){
    return{
        type:actionTypes.CHANGE_CATEGORY,
        payload:currentCategory
    }
}

export function getCategories(){
    return function(dispatch){
        return fetch("http://localhost:3000/categories").then(response=>response.json()).then(data=>dispatch(getCategoriesSuccess(data)))
    }
}