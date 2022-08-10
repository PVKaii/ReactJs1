import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore ,combineReducers,applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import foodReducer from './reducers/FoodReducer';
import foodActionReducer from './reducers/FoodActionReducer';
import thunk from 'redux-thunk';
import authReducer from './reducers/AuthReducer';


const store =createStore(combineReducers({ 
  foodReducer,
  foodActionReducer,
  authReducer
}),
applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
