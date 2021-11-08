import {GET_PRODUCTS} from "../action-types/Product-action-types.js"

export const productList = (dispatch, data) => {
	return dispatch({type: GET_PRODUCTS, payload: data})
}