import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createStore} from "redux";
import { allReducers } from './reducers/index.jsx';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <App />
   </Provider>
 ,
)
