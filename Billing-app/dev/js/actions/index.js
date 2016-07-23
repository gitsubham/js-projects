//action creator
export const selectUser = (user) => {
	console.log("You are good !", user.first);

	// action
	// It contain two parts - 1. type - What happened ? 2. Payload
	// Any time any action occurs, that action is sent to all the reducers.
	return {
		type : "USER_SELECTED",
		payload : user
	}
}