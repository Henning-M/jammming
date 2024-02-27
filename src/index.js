import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/App/App";
import { Provider } from 'react-redux';
import { store } from './components/App/store';
import "./index.css"; //Check relevance later - currenty only minor effect
import  { BrowserRouter } from 'react-router-dom';

//Integratin Router
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);


// //This worked before using Router (but after integrating redux)
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );