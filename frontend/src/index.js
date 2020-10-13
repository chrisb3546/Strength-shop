import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './index.css';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import OrderReducer from './reducers/OrderReducer'
import products from './reducers/products'
import currentUser from './reducers/currentUser'



import categories from './reducers/categories'
import App from './App';
// import { combineReducers } from 'redux'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  products,
  categories,
  currentUser,
   
  
})
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

