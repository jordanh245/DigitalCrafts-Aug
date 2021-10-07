const initialState = {
	userName: "",
	userEmail: "",
	userAddress: "",
	userResturants: "",
	userData: {},
  };
  // useDispatch()
  
  // {type: ""}
  export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	  case "SET_USERNAME":
		return {...state,userName: action.payload };

		case "SET_EMAIL":
			return {...state,userEmail: "fakeemail@gmail.com" };

		case "SET_ADDRESS":
			return {...state,userAddress: "123 Main St" };

		case "SET_RESTURANTS":
		return {...state,userResturants: action.payload };

		case "GET_USER":
		return {...state,userData: action.payload };
  
	  default:
		return state;
	}
  };