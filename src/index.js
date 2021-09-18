import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './redux/rootReducer';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('root'));

reportWebVitals();
