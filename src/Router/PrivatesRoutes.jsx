import { Navigate } from "react-router-dom";
import authState from "../auth/hook/authState";

export const PrivatesRoutes = ({ children }) => {
    const { userLogged } = authState();

    if (userLogged()) {
        return <Navigate to="/" />;
    };

    return children;
};
