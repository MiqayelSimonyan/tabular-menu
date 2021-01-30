import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware, { END } from 'redux-saga';
import logger from 'redux-logger';

import history from '../session-history';
import reducer from './reducer';
import rootSaga from './saga';

function getStore() {
    const sagaMiddleware = createSagaMiddleware();

    const enhancer = (process.env && process.env.NODE_ENV) !== 'production'
        ? applyMiddleware(routerMiddleware(history), sagaMiddleware, logger) : applyMiddleware(routerMiddleware(history), sagaMiddleware);

    const store: any = createStore(reducer as any, enhancer);
    if (process.env && process.env.NODE_ENV !== 'production' && typeof window != 'undefined') window.store = store;

    sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);

    return store;
}

export default getStore();