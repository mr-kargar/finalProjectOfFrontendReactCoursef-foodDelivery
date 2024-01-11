import React from 'react'
import { Navigate, useNavigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  
  if(!token){
   return <Navigate to={"/login"} replace={true} />
  }
  return children

 
    
  
}

export default ProtectedRoute ;