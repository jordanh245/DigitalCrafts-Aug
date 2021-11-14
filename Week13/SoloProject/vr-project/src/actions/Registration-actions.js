import {SET_FIRST_NAME} from "../action-types/Registration-action-types"

export const firstName = (dispatch) => {
	 dispatch({type: SET_FIRST_NAME})
}