import { List } from "immutable";

import { IActionCreator } from '../global/action-creator';
import { IMessage } from '../message';

export const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';

export interface IMessageState {
    loading: boolean;
    messages: List<IMessage>;
};

// actions
export interface IGetMessagesAction extends IActionCreator {
    type: typeof GET_MESSAGES_REQUEST;
};

export interface IGetMessagesSuccessAction extends IActionCreator<Array<IMessage>> {
    type: typeof GET_MESSAGES_SUCCESS;
};

export type MessagesActionTypes = IGetMessagesAction | IGetMessagesSuccessAction;