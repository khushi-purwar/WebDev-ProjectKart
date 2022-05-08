import { getMessages } from "../static-data"
import {SEND_MESSAGE} from "../actions/constants/action-type"

export default function messages(state= getMessages(10), action) {
	switch (action.type) {
		case SEND_MESSAGE:			
			const {message, userId} = action.payload;			
			const allMessage = state[userId];
			const number = +Object.keys(allMessage).pop() + 1
			return {...state,
					[userId]: {
						...state[userId],
						[number]: {
							is_user_msg: true,
							number: number,
							text: message
						}
					}}
		default:
			return state;
	}
}