import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/user/Provider";

export default function Protected() {
    const { state } = useContext(UserContext)
    const location = useLocation();
    const _token = localStorage.getItem('access_token');

    if (state.isLoggedIn && _token) {
        return <Outlet />
    }

    return <Navigate to='/login' state={{ from: location }} replace />
}
