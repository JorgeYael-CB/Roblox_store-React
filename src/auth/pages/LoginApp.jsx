import { NavLink, Navigate } from "react-router-dom";
import { TitleForm } from "../layout/TitleForm";
import authState from "../hook/authState";
import { useState, useEffect } from "react";
import { AlertApp } from "../../layout/AlertApp";
import { SpinnerApp } from "../../layout/SpinnerApp";

export const LoginApp = () => {
    const { loginUser, error, errorMsg, isLoading, succes, userLogged } = authState();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (succes && userLogged()) {
            setUser({
                email: '',
                password: '',
            });
            setRedirect(true);
        }
    }, [succes]);

    const onLoginUser = async (e) => {
        e.preventDefault();
        try {
            await loginUser({ email: user.email, password: user.password });
        } catch (err) {
            console.log(err);
        }
    };

    const onChangeValue = ({ target }) => {
        const { value, id } = target;

        setUser({
            ...user,
            [id]: value,
        });
    };

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <TitleForm />

            <form className="max-w-lg bg-white shadow-md m-auto p-4 flex flex-col gap-5 rounded-md" onSubmit={onLoginUser}>
                <h1 className="mt-2 text-center text-black text-3xl mb-4">Welcome Back!</h1>
                <hr />

                <div className="flex flex-col gap-1">
                    <label className="text-base font-semibold" htmlFor="email">Email:</label>
                    <input value={user.email} onChange={onChangeValue} className="bg-gray-100 p-2 rounded-md text-black font-semibold outline-none" id="email" type="email" placeholder="example@google.com" />
                </div>

                <div className="flex flex-col gap-1 mb-4">
                    <label className="text-base font-semibold" htmlFor="password">Password:</label>
                    <input value={user.password} onChange={onChangeValue} className="bg-gray-100 p-2 rounded-md text-black font-semibold outline-none" id="password" type="password" placeholder="example123456" />
                </div>

                {
                    isLoading
                        ? <SpinnerApp />
                        : <button type="submit" className="bg-black text-center w-full p-1 text-white font-semibold rounded-sm mb-4 text-base">Login</button>
                }

                {
                    error && <AlertApp message={errorMsg} error={true} />
                }

                <div className="flex flex-col gap-1">
                    <p className="text-base text-center">
                        You do not have an account?
                        <NavLink className="text-blue-600 font-semibold" to="/auth/sign-up"> Sign up</NavLink>
                    </p>
                    <NavLink className="text-center text-blue-600 font-semibold" to="/auth/forgot-password">Forgot password?</NavLink>
                </div>
            </form>
        </>
    );
};
