import React from 'react';
import ReactDOM from 'react-dom';
import {PrivateRoute} from "./routes";
import { withRouter,Router, Route, Redirect, Switch, useParams } from 'react-router-dom';
import { history } from '../src/helpers/history';
import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";
import ForgotComponent from "./components/ForgotComponent";
import CompanyListComponent from "./components/superAdmin/Company/CompanyListComponent";
import AddCompanyComponent from "./components/superAdmin/Company/AddCompanyComponent";
import EditCompanyProfileComponent from "./components/superAdmin/Company/EditCompanyProfileComponent";
import CompanyCoverageListComponent from "./components/superAdmin/Company/CompanyCoverageListComponent";
import StateListComponent from "./components/superAdmin/StateManagment/StateListComponent";
import CountyListComponent from "./components/superAdmin/StateManagment/CountyListComponent";
import ZipCodeListComponent from "./components/superAdmin/StateManagment/ZipCodeListComponent";
import StaffListComponent from "./components/CompanyAdmin/StaffManagment/StaffListComponent";
import AddStaffComponent from "./components/CompanyAdmin/StaffManagment/AddStaffComponent";
import EditStaffComponent from "./components/CompanyAdmin/StaffManagment/EditStaffComponent";
import ProfileComponent from "./components/Profile/ProfileComponent";
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
                <PrivateRoute
                   exact={true} path="/company"
                   component={CompanyListComponent}
                />
                 <PrivateRoute
                   exact={true} path="/addcompany"
                   component={AddCompanyComponent}
                />
                 <PrivateRoute
                   exact={true} path="/editcompany"
                   component={EditCompanyProfileComponent}
                />
                 <PrivateRoute
                   exact={true} path="/coveragecompany"
                   component={CompanyCoverageListComponent}
                />
                 <PrivateRoute
                   exact={true} path="/state"
                   component={StateListComponent}
                />
                 <PrivateRoute
                   exact={true} path="/county"
                   component={CountyListComponent}
                />
                 <PrivateRoute
                   exact={true} path="/zip"
                   component={ZipCodeListComponent}
                />
                 <PrivateRoute
                   exact={true} path="/staff"
                   component={StaffListComponent}
                />
                 <PrivateRoute
                   exact={true} path="/addstaff"
                   component={AddStaffComponent}
                />
                 <PrivateRoute
                   exact={true} path="/editstaff"
                   component={EditStaffComponent}
                />
                 <PrivateRoute
                   exact={true} path="/profile"
                   component={ProfileComponent}
                />
                
            </Switch>
      </Router>
    )
  }
}

export default App;
