import { Navigate, Route, Routes } from "react-router-dom"
import { HomeApp } from "../pages/HomeApp"
import { AccountsApp } from "../pages/AccountsApp"



export const HomeRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeApp/>}/>
            <Route path="/accounts" element={<AccountsApp/>}/>

            <Route path="/*" element={ <Navigate to={'/'}/> }/>
        </Routes>
    )
}
