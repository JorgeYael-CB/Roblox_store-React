import { useEffect, useState } from "react";
import authState from "../hook/authState"
import { TitleForm } from "../layout/TitleForm"
import { useParams } from "react-router-dom";
import { SpinnerApp } from "../../layout/SpinnerApp";
import { AlertApp } from "../../layout/AlertApp";



export const ResetPasswordApp = () => {
    const {token} = useParams();
    const [user, setUser] = useState({
        newPassword: ''
    });
    const {resetPassword, error, errorMsg, isLoading, succes, succesMessage} = authState();


    const onChange = ({target}) => {
        const {value} = target;

        setUser({
            ...user,
            newPassword: value,
        });
    };

    const onResetPassword = async() => {
        await resetPassword({newPassword: user.newPassword, token});
    };


    return (
        <>
            <TitleForm/>

            {
                succes
                ?
                <AlertApp message={"Password changed!"}/>
                :
                <form className="max-w-lg bg-white shadow-md m-auto p-4 flex flex-col gap-5 rounded-md">
                <div className="flex flex-col gap-1 mb-4">
                    <label className="text-base font-semibold" htmlFor="password">New Password:</label>
                    <input onChange={onChange} value={user.password} className="bg-gray-100 p-2 rounded-md text-black font-semibold outline-none" id="password" type="password" placeholder="example123456"/>
                </div>

                {
                    isLoading
                    ?
                    <SpinnerApp/>
                    :
                    <button disabled={isLoading} onClick={onResetPassword} className="bg-black text-center w-full p-1 text-white font-semibold rounded-sm mb-2 text-base disabled:opacity-50">Sign Up</button>
                }

                { error && <AlertApp message={errorMsg} error={true}/> }
            </form>
            }
        </>
    )
}
