import { NavLink } from "react-router-dom"
import { TitleForm } from "../layout/TitleForm"
import { useState } from "react";
import authState from "../hook/authState";
import { SpinnerApp } from "../../layout/SpinnerApp";
import { AlertApp } from "../../layout/AlertApp";



export const ForgotPasswordApp = () => {
    const [email, setEmail] = useState('');
    const {forgotPasword, error, errorMsg, isLoading, succes, succesMessage} = authState();


    const changedValue = ({target}) => {
        const {value} = target;
        setEmail(value)
    };

    const onForgotPassword = async() =>{
        await forgotPasword({email});
    }


    return (
        <>
            <TitleForm/>

            <form className="max-w-lg bg-white shadow-md m-auto p-4 flex flex-col gap-5 rounded-md">
                <h1 className="mt-2 text-center text-black text-3xl">Reset your password</h1>
                <p className="text-center font-normal">receive an email to reset your password</p>
                <hr />

                <div className="flex flex-col gap-1">
                    <label className="text-base font-semibold" htmlFor="email">Email:</label>
                    <input onChange={changedValue} value={email} className="bg-gray-100 p-2 rounded-md text-black font-semibold outline-none" id="email" type="email" placeholder="example@google.com"/>
                </div>

                {
                    isLoading
                    ?
                    <SpinnerApp/>
                    :
                    <button onClick={onForgotPassword} className="bg-black text-center w-full p-1 text-white font-semibold rounded-sm mb-4 text-base">Send Email</button>
                }

                {
                    error
                    ?
                    <AlertApp message={errorMsg} error={true}/>
                    :
                    succes && <AlertApp message={"Email send!"}/>
                }

                <div className="flex flex-col gap-1">
                    <p className="text-base text-center">
                        Do you already have an account?
                        <NavLink className={"text-blue-600 font-semibold"} to={"/auth/login"}> Login</NavLink>
                    </p>

                    <p className="text-base text-center">
                        You do not have an account?
                        <NavLink className={"text-blue-600 font-semibold"} to={"/auth/sign-up"}> Sign up</NavLink>
                    </p>
                </div>
            </form>
        </>
    )
};