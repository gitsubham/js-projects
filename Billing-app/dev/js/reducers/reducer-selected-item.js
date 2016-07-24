// while the application loads for the first time , it goes to all the reducers
// for the initial values. So we have to set some initial value , otherwise it will be undefined.
// here we have set default input as null.
// Note that it has taken action as input.
export default function (state = [],action) {
	switch(action.type){
		case "ADD_ITEM" : 
			return [
				...state, action.payload
			] ;
			break;
		default : 
			return state;

	}
	// return if nothing matches.
	return state;
}