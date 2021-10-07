const initialState = {
	mustang: "1967 Mustang Boss 302",
	fordgt: "2021 Ford Gt",
	bugatti: "2021 Bugatti chiron",
	kawasaki : "zix1200"
}

const rootReducer = (state= initialState, action)=> {
	switch(action.type) {
		case "GET_BUGATTI":
		return state.bugatti;
		case "GET_MUSTANG":
		return state.mustang;
		case "GET_FORDGT":
		return state.fordgt;
		case "GET_KAWASAKI":
		return state.kawasaki;
		default:
			return state
	}
	
};

export default rootReducer()