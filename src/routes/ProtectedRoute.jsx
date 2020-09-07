import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from "react-router";
import {Route} from "react-router-dom";

const ProtectedRoute = (props) => {


    const {
        element: Component,
        path,
        ...rest
    } = props;

    const {isLoggedIn} = useSelector(state => state.auth)

    return (
        <Route path={path}
               element={
                   isLoggedIn ?
                       <Component {...props}/> :
                       <Navigate to={{pathname: '/login'}}/>
               }
        />
    );
};

ProtectedRoute.propTypes = {};

export default ProtectedRoute;
