import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router'

import 'bootstrap/dist/css/bootstrap.min.css';

import store from './redux-implementation';
import history from './session-history';
import BackToTop from './components/common/back-to-top';

import Root from './root';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <Root />
        </Router>
      </Provider>
      <BackToTop />
    </div>
  );
}

export default App;