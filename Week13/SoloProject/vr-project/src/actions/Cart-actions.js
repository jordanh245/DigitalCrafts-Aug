import { ADD_ITEM, REMOVE_ITEM } from "../action-types/Cart-action-types";

export const addToCart = (dispatch, product ) => {
	
	dispatch({type: ADD_ITEM, payload: product});
};

export const removeFromCart =  (dispatch, product) => {
	dispatch ({type: REMOVE_ITEM, payload: product})
}