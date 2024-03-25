import React from 'react'
import { Navigate, Outlet,  } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return <Navigate to="/login"  />;
    }
  
    return children || <Outlet />; 
  };


export default ProtectedRoute