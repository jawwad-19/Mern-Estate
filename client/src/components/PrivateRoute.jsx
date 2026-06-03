<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
=======
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function PrivateRoute() {
const {currentUser} = useSelector((state) => state.user)
    return ( currentUser ? <Outlet/> : <Navigate to='/sign-in' /> )
  
>>>>>>> 9fd1453f029e3449823ac9ad09b238362e52676e
}
