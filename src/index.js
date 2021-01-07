import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './content/css/bootstrap.css'
import './content/css/dataTables.bootstrap4.min.css'
import './content/css/jquery.minicolors.css'
import './content/css/style.css'
import './content/css/responsive.css'
import { Router, Route } from 'react-router-dom';
import { history } from '../src/helpers/history';
import { Provider } from 'react-redux';
import { store } from "./store";
import App from "./App";
ReactDOM.render(

  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root')
);