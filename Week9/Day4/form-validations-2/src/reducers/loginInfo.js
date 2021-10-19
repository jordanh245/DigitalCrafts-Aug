const initialState = {
		
}

const LoginInfo = (state=initialState, action) => {
	switch(action.type){
		case "GET_USER":
			return {...state, userData:action.payload}
			
			default:
			return state;
	}
};

export default LoginInfo;