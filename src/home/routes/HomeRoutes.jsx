import { Navigate, Route, Routes } from "react-router-dom"
import { HomeApp } from "../pages/HomeApp"
import { AccountsApp } from "../pages/AccountsApp"
import authState from "../../auth/hook/authState"



export const HomeRoutes = () => {
    const {userLogged} = authState();


    return (
        <Routes>
            <Route path="/" element={<HomeApp/>}/>

            <Route path="/accounts" element={<AccountsApp/>}/>

            <Route path="/*" element={ <Navigate to={'/'}/> }/>
        </Routes>
    )
}
