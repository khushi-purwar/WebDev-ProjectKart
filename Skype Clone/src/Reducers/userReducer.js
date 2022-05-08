import { generateUser } from "../static-data"

export default function user(state= generateUser(), action) {
	return state;
}