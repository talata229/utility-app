import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const AuthGuard = ({ children }) => {
    debugger
    const { isAuthenticated } = useAuth()
    const redirect = useNavigate();
    let authenticated = isAuthenticated;

    return <>{authenticated ? children : redirect("/sign-in")}</>;
}

export default AuthGuard
