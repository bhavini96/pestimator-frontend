import React from 'react';
import ReactDOM from 'react-dom';
import {PrivateRoute} from "./routes";
import { withRouter,Router, Route, Redirect, Switch, useParams } from 'react-router-dom';
import { history } from '../src/helpers/history';
import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";
import ForgotComponent from "./components/ForgotComponent";
import CompanyListComponent from "./components/superAdmin/company/CompanyListComponent";
import AddCompanyComponent from "./components/superAdmin/company/AddCompanyComponent";
import EditCompanyProfileComponent from "./components/superAdmin/company/EditCompanyProfileComponent";
import CompanyCoverageListComponent from "./components/superAdmin/company/CompanyCoverageListComponent";
import StateListComponent from "./components/superAdmin/stateManagment/StateListComponent";
import CountyListComponent from "./components/superAdmin/stateManagment/CountyListComponent";
import ZipCodeListComponent from "./components/superAdmin/stateManagment/ZipCodeListComponent";
import StaffListComponent from "./components/companyAdmin/staffManagment/StaffListComponent";
import AddStaffComponent from "./components/companyAdmin/staffManagment/AddStaffComponent";
import EditStaffComponent from "./components/companyAdmin/staffManagment/EditStaffComponent";
import ProfileComponent from "./components/profile/ProfileComponent";
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
                   exact={true} path="/county/:statename/:stateid"
                   component={CountyListComponent}
                />
                 <PrivateRoute
                   exact={true} path="/zip/:statename/:countyname"
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
