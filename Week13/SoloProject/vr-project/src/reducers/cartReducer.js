import {ADD_ITEM, REMOVE_ITEM} from "../action-types/Cart-action-types"


const initialState = [
	
];

const Cart = (state=initialState, action) => {
	switch (action.type){
		case ADD_ITEM:
		return [...state, action.payload];
		case REMOVE_ITEM:
		const newState = state;
		const removeItem = newState.filter((product)=> product !== action.payload);
		return removeItem
		
		
		default:
			return state;
	}
}

export default Cart;