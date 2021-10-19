const initialState = {
	students:[
		{name: "Jose"},
		{name: "Britt"},
		{name: "Matt"},
		{name: "Dustin"},
		{name: "Justin"},
		{name: "Kayla"},
		{name: "Deanna"},
		{name: "Cameron"},
		{name: "Tim"},
		{name: "Ron"},
		{name: "Jamie"},
		{name: "Brande"},
		{name: "Jordan"},
		{name: "Xavier"},
	 ]
}

function rootReducer(state=initialState, action) {
	switch (action.type) {
		case "GET_STUDENTS":
			return state

			default:
			return state

		
	}
}

export default rootReducer;