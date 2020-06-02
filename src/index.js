import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'; 
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import combiReducers from './Reducers'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
const store = createStore(
    combiReducers, 
    composeEnhancers(
      applyMiddleware(thunk)
    )
);
 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
); 