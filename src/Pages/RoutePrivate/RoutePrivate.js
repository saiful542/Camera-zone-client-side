import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Pinner from '../Shared/Pinner/Pinner';

const RoutePrivate = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {

        return (
           <Pinner></Pinner>
        )

    }


    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (children)
                    : (<Redirect to={{
                        pathname: "/Login",
                        state: { from: location }
                    }}>
                    </Redirect>)}
        >
        </Route>
    );
};

export default RoutePrivate;