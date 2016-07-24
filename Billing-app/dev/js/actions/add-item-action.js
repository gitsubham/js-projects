//action creator
export const addItem = (item) => {
	console.log("You are good !");
	console.log(item);
	// action
	// It contain two parts - 1. type - What happened ? 2. Payload
	// Any time any action occurs, that action is sent to all the reducers.
	return {
		type : "ADD_ITEM",
		payload : item
	}
}