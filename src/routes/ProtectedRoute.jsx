import React from 'react';
import {useSelector} from "react-redux";
import {Redirect} from "react-router";
import {Route} from "react-router-dom";

const ProtectedRoute = (props) => {


    const {
        component: Component,
        path,
        ...rest
    } = props;

    const {isLoggedIn} = useSelector(state => state.auth)

    return (
        <Route path={path}
               {...rest}
               render={() => (
                   isLoggedIn ? <Component {...props}/> : <Redirect to={{pathname: '/login'}}/>
               )}
        />
    );
};

ProtectedRoute.propTypes = {};

export default ProtectedRoute;
