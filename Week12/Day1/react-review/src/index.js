import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import logger from "redux-logger"
import rootReducer from './redux/reducers/rootReducer';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
  <React.StrictMode>
    
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



