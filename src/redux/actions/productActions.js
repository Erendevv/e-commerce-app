import * as actionTypes from './actionTypes'

export function getProductSucces(products){
    return{
        type:actionTypes.GET_PRODUCTS,
        payload:products
    }
}
export function getProducts(categoryId){
    return function(dispatch){
        let url="http://localhost:3000/products";
        if(categoryId){
            url +="?categoryId=" + categoryId;
        }
        fetch(url).then(response=>response.json()).then(data=>dispatch(getProductSucces(data)))
    }

}