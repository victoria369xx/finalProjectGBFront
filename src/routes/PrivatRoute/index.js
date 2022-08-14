
import { Navigate } from "react-router-dom";

export const PrivatRoute = ({ children }) => {

    // временно ставим постоянную авторизацию
    const authed = true
    console.log(children)
    return (
        authed ? children : <Navigate to="/" replace />
    )
}