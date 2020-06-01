import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'; 
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import combiReducers from './Reducers'

const store = createStore(
  combiReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
); 