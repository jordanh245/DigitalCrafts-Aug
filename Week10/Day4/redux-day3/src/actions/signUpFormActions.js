 import {INCREMENT_COUNTER, DECREMENT_COUNTER} from "../action-types/counter-types"
 import {useDispatch} from "react-redux"
 
 
 
 export const consoleLogVariable = (name) => {
	console.log(name);
}

export const IncrementCounter = (dispatch, message) => {
	consoleLogVariable(message)
	dispatch({type:INCREMENT_COUNTER})
}

export const DecrementCounter = (dispatch, message) => {
	consoleLogVariable(message)
	dispatch({type:DECREMENT_COUNTER})
}