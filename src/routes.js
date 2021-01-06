import React from 'react';
import { withRouter, Route, Redirect, Switch, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <Route
                    exact={true} path="/"
                    component={LoginComponent}
                />
               <Route
                    exact={true} path="/signup"
                    component={SignUpComponent}
                />
            </Switch>
        );

    }
}
function mapState(state) {
    return {};
}
export default connect(mapState)(withRouter(Routes));

