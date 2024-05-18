import { NavLink } from "react-router-dom";
import authState from "../../auth/hook/authState"

export const NavBar = () => {
    const { userLogged } = authState();


    return (
        <header className="bg-black flex md:flex-row flex-col justify-between gap-8 items-center py-4 px-8">
            <NavLink to={"/"} className="text-white text-left font-semibold text-2xl">DevComplete Studios</NavLink>

            <nav className="flex md:flex-row flex-col items-center gap-4">
                {
                    userLogged()
                    ?
                    <>
                        <NavLink className="text-white text-lg" to="#">FAQ</NavLink>
                        <NavLink className="text-white text-lg" to="/terms">Terms</NavLink>
                        <NavLink className="text-white text-lg" to="/accounts">Accounts</NavLink>
                    </>
                    :
                    <>
                        <NavLink className="text-white text-lg" to="/auth/login">Login</NavLink>
                        <NavLink className="text-white text-lg" to="/auth/sign-up">Sign-Up</NavLink>
                    </>
                }
            </nav>
        </header>
    )
}
