const initalState = [];

const Users = (state=initalState,action) => {
	switch (action.type) {
		case "LOAD_USER":
			console.log(action.payload)
			return [...state, ...action.payload]
		default:
			return state;
	}
}
export default Users;