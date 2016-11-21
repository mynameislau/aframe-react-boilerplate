import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import { myDataReducer } from './reducers/my-data-reducer';
import { MyComponent } from './components/my-component';

const store = createStore(combineReducers({
  myData: myDataReducer
}));

window.addEventListener('load', () => {
  ReactDOM.render(
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={MyComponent}/>
        </Router>
      </Provider>

    , document.getElementById('app'));
});
