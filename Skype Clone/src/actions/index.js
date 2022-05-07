import {SET_ACTIVE_USER_ID, 
		SET_VALUE_TYPE,
		SEND_MESSAGE } from "./constants/action-type"

 export const setActiveUserId = id => ({
	type:SET_ACTIVE_USER_ID,
	payload: id
})

 export const setValueType = value => ({
 	type:SET_VALUE_TYPE,
 	payload: value
 })

 export const sendMesage = (message, userId) => ({
	 type: SEND_MESSAGE,
	 payload: {
		 message,
		 userId

	 }
 })

