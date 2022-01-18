import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({ children }) => {
  let { user, isLoading, admin } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="grow" variant="info" />
      </div>
    );
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
