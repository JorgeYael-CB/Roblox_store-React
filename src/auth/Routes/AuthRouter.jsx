import { Navigate, Route, Routes } from "react-router-dom"
import { ForgotPasswordApp, RegisterApp, LoginApp, VerifyAccountApp, ResetPasswordApp } from "../pages";


export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginApp/>}/>
            <Route path="/sign-up" element={<RegisterApp/>}/>
            <Route path="/sign-up/verify-account/:token" element={<VerifyAccountApp/>}/>
            <Route path="/forgot-password" element={<ForgotPasswordApp/>}/>
            <Route path="/forgot-password/reset-password/:token" element={<ResetPasswordApp/>}/>

            <Route path="/*" element={ <Navigate to={"/auth/login"}/> }/>
        </Routes>
    );
};