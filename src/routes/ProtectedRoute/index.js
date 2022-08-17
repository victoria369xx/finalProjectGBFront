
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = (props) => {
    const isAuthed = props.authed
    return (
        isAuthed ? <Outlet/> : <Navigate to='login' replace/>
    )
}