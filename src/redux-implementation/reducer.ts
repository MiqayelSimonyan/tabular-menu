import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import messagesReducer, { moduleName as messagesModule } from '../ducks/messages';

export default combineReducers({
    router,
    [messagesModule]: messagesReducer
});