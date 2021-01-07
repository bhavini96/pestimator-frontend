import React from 'react';
import ReactDOM from 'react-dom';
import {SuperAdminLayoutRoute} from "./routes";
import { withRouter,Router, Route, Redirect, Switch, useParams } from 'react-router-dom';
import { history } from '../src/helpers/history';
import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";
import ForgotComponent from "./components/ForgotComponent";
import CompanyListComponent from "./components/superAdmin/Company/CompanyListComponent";
import AddCompanyComponent from "./components/superAdmin/Company/AddCompanyComponent";
import EditCompanyProfileComponent from "./components/superAdmin/Company/EditCompanyProfileComponent";
class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Router history={history}>
          <Switch>
                <Route
                    exact={true} path="/"
                    component={LoginComponent}
                />
               <Route
                    exact={true} path="/signup"
                    component={SignUpComponent}
                />
                 <Route
                    exact={true} path="/forgot"
                    component={ForgotComponent}
                />
                <SuperAdminLayoutRoute
                   exact={true} path="/company"
                   component={CompanyListComponent}
                />
                 <SuperAdminLayoutRoute
                   exact={true} path="/addcompany"
                   component={AddCompanyComponent}
                />
                 <SuperAdminLayoutRoute
                   exact={true} path="/editcompany"
                   component={EditCompanyProfileComponent}
                />
            </Switch>
      </Router>
    )
  }
}

export default App;
