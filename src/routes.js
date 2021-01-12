import React from 'react';
import { withRouter, Route, Redirect, Switch, useParams } from 'react-router-dom';
import LayoutCompoent from "./components/layout/LayoutCompoent";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
                <LayoutCompoent>
                    <Component {...props} />
                </LayoutCompoent>
        )} />
    )
}

