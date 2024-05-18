import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/Routes/AuthRouter"
import { PrivatesRoutes } from "./PrivatesRoutes";
import { HomeRoutes } from "../home/routes/HomeRoutes";


export const AppRoutes = () => {
    return (
        <Routes>
            {/* Rutas Auth */}
            <Route path="/auth/*" element={
                <PrivatesRoutes>
                    <AuthRoutes/>
                </PrivatesRoutes>
            }/>

            <Route path="/*" element={<HomeRoutes/>}/>
        </Routes>
    )
};