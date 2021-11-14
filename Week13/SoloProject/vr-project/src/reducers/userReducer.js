
import {SET_FIRST_NAME} from "../action-types/Registration-action-types"

const initalState = [];

const Users = (state=initalState,action) => {
	switch (action.type) {
		case SET_FIRST_NAME:
			return {...state,...action.payload}
		
		default:
			return state;
	}
}
export default Users;