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
import Routes from "./routes";
import { Provider } from 'react-redux';
import { store } from "./store";

ReactDOM.render(

  <Provider store={store}>
  <Router  history={history}>
    <Routes />
    </Router>
  </Provider>,

  document.getElementById('root')
);