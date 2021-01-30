import { createSelector } from 'reselect';

import { moduleName } from '../ducks/messages';

const stateSelector = (key: string) => (state: any) => state[moduleName].get(key);

export const loadingSelector = createSelector(stateSelector('loading'), (value) => {
    return value && value.toJS ? value.toJS() : value;
});

export const messagesSelector = createSelector(stateSelector('messages'), (value) => {
    return value && value.toJS ? value.toJS() : value;
});