import {SET_ACTIVE_USER_ID} from "../actions/constants/action-type"

export default function activeUserId(state=null, action) {
	switch (action.type) {
		case SET_ACTIVE_USER_ID:
			return action.payload
		default:
			return state;
	}

}