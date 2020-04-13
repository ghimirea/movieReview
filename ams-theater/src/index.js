import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./serviceWorker";
import axios from "axios";
import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import Reducer from "../src/Store/reducer"
import navReducer from "../src/Store/navreducer"


/**
 * fro the creation of the Root reducer and combine both of  the reducers in one 
 */
const RootReducer = combineReducers({
  admin: navReducer,
  movieReducer: Reducer

})


//to optimize the code use a common url,header,content type and intercepto
//to creacte a common base url instead of calling all the url
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

//to add a common interceptors
axios.interceptors.request.use(
  (requests) => {
    console.log(requests);
    return requests;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// composeEnhancers(applyMiddleware())
const Store = createStore(RootReducer, composeEnhancers())
ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
