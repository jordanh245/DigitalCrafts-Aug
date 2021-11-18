import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';

import {Provider} from "react-redux";
import rootReducer from './reducers/rootReducer';
import logger from "redux-logger"

// 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(logger))
  );

ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



