import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
 
const PrivateRoute = ({ children }) => {
    let {user,isLoading} = useAuth();
    let location = useLocation();
    if(isLoading){return (
      <div className='text-center my-5'>
        <Spinner animation="grow" variant="info" />
      </div>
    ); }
    if(user.email){
        return children;
    }
  return <Navigate to="/regester" state={{ from: location }} replace />;
};

export default PrivateRoute;