const initialState  = {
	isLoggedIn: false,
};



const Nav = (state = initialState, action) => {
	switch (action.type) {
		case "ON_LOGGED_IN":
			return {
				...state,
				isLoggedIn: true
			};
			default: return state;
	}
};

export default Nav;