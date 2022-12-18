import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuth } = useSelector((state) => state?.authReducer);

  if (!isAuth) {
    return <Navigate to="/admin/login" />;
  }

  return children;
}

export default PrivateRoute;
