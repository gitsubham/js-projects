//action creator
export const generateBill = (item) => {
	console.log("You are GENERATE_BILL !", item);

	// action
	// It contain two parts - 1. type - What happened ? 2. Payload
	// Any time any action occurs, that action is sent to all the reducers.
	return {
		type : "GENERATE_BILL",
		payload : item
	}
}