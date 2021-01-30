import axios, { AxiosResponse } from 'axios';
import { all, takeEvery, put, delay } from 'redux-saga/effects';
import { Map, fromJS, List } from 'immutable';

import { SetMapTypeAllowedData } from '../types/global/reducer-state';
import { IMessage } from '../types/message';
import {
	IMessageState,
	MessagesActionTypes,
	IGetMessagesAction,
	GET_MESSAGES_REQUEST,
	GET_MESSAGES_SUCCESS
} from '../types/store/messages';

const initialState: IMessageState = {
	loading: false,
	messages: List.of()
};

export const moduleName = 'messages';

type MapTypeAllowedData = SetMapTypeAllowedData<IMessageState>;

const initialStateMap = Map(initialState) as MapTypeAllowedData;

export default function reducer(
	state = initialStateMap,
	action: MessagesActionTypes
) {
	switch (action.type) {
		case GET_MESSAGES_REQUEST:
			return state
				.set('loading', true);

		case GET_MESSAGES_SUCCESS:
			return state
				.set('loading', false)
				.set('messages', fromJS(action.payload));
		default:
			return state;
	}
};

/* actions */
export function getMessages(): MessagesActionTypes {
	return {
		type: GET_MESSAGES_REQUEST
	}
};

/* saga */
export const getMessagesSaga = function* (action: IGetMessagesAction) {
	try {
		yield delay(1000);
		let messages: AxiosResponse<Array<IMessage>> = yield axios('data.json');

		yield put({
			type: GET_MESSAGES_SUCCESS,
			payload: messages?.data
        });
	} catch (err) {
		console.log('err', err);
	}
};

export const saga = function* () {
	yield all([
		takeEvery(GET_MESSAGES_REQUEST, getMessagesSaga)
	]);
};