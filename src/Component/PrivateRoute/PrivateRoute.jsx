import React from 'react';
import useAuth from '../../Hook/useAuth';
import Loader from '../Loader';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const { user, loading} = useAuth();
    const location = useLocation(  )

    if(loading){
        return <Loader></Loader>
    }

    if(!user){
        return <Navigate to='/login' state={location?.pathname  || '/'}></Navigate>
    }
    
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;