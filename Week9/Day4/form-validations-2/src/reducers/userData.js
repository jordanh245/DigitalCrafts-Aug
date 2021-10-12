const initialState = {
	userData: "",
};

const UserData = (state=initialState, action) => {
	switch (action.type) {
		case "GET_USERDATA":
			return {...state, userData:action.payload}
	
		default:
			return state;
	}
};

export default UserData;