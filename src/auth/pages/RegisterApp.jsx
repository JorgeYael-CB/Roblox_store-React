import { NavLink } from "react-router-dom"
import { TitleForm } from "../layout/TitleForm"
import authState from "../hook/authState"
import { useState } from "react";
import { AlertApp, SpinnerApp } from "../../layout";



export const RegisterApp = () => {
    const {onRegisterUser, isLoading, error, errorMsg, succes, succesMessage} = authState();

    const [newUser, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });



    const onChangeValue = ({target}) => {
        const {value, id} = target;

        setUser({
            ...newUser,
            [id]: value,
        });
    };

    const resetSetUser = () => {
        if( succes ){
            setUser({
                email: '',
                password: '',
                name: '',
            })
        }
    }

    const onRegister = async (e) => {
        e.preventDefault();

        await onRegisterUser({name: newUser.name, email: newUser.email, password: newUser.password});
        resetSetUser();
    };


    return (
        <>
            <TitleForm/>

            <form className="max-w-lg bg-white shadow-md m-auto p-4 flex flex-col gap-5 rounded-md">
                <h1 className="mt-2 text-center text-black text-3xl mb-4">Create an account.</h1>
                <hr />

                <div className="flex flex-col gap-1">
                    <label className="text-base font-semibold" htmlFor="name">Name:</label>
                    <input onChange={onChangeValue} value={newUser.name} className="bg-gray-100 p-2 rounded-md text-black font-semibold outline-none" id="name" type="text" placeholder="exampleTurtle"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-base font-semibold" htmlFor="email">Email:</label>
                    <input onChange={onChangeValue} value={newUser.email} className="bg-gray-100 p-2 rounded-md text-black font-semibold outline-none" id="email" type="email" placeholder="example@google.com"/>
                </div>

                <div className="flex flex-col gap-1 mb-4">
                    <label className="text-base font-semibold" htmlFor="password">Password:</label>
                    <input onChange={onChangeValue} value={newUser.password} className="bg-gray-100 p-2 rounded-md text-black font-semibold outline-none" id="password" type="password" placeholder="example123456"/>
                </div>

                {
                    isLoading
                    ?
                    <SpinnerApp/>
                    :
                    <button disabled={isLoading} onClick={onRegister} className="bg-black text-center w-full p-1 text-white font-semibold rounded-sm mb-2 text-base disabled:opacity-50">Sign Up</button>
                }

                {
                    error
                    ?
                    <AlertApp message={errorMsg} error={true}/>
                    :
                    succes && <AlertApp message={succesMessage}/>
                }

                <div className="flex flex-col gap-1">
                    <p className="text-base text-center">
                        Do you already have an account?
                        <NavLink className={"text-blue-600 font-semibold"} to={"/auth/login"}> Login</NavLink>
                    </p>

                    <p className="text-base text-center">
                        Forgot password?
                        <NavLink className={"text-blue-600 font-semibold"} to={"/auth/forgot-password"}> Reset Password</NavLink>
                    </p>
                </div>
            </form>
        </>
    )
};