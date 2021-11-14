

const initalState = [];

const loginData = (state=initalState,action) => {
	switch (action.type) {
		case "LOGIN_USER":
			return action.payload
		
		default:
			return state;
	}
}
export default loginData;