import { useParams } from "react-router-dom";
import authState from "../hook/authState"
import { TitleForm } from "../layout/TitleForm"
import { SpinnerApp, AlertApp } from "../../layout";
import { useEffect } from "react";




export const VerifyAccountApp = () => {
    const {token} = useParams();
    const {verifyAccount, error, errorMsg, isLoading, succes, succesMessage} = authState();

    useEffect(() => {
        verifyAccount({jwt: token});
    }, []); // lo ejecutamos 1 sola vez

    return (
        <>
            <TitleForm/>

            {
                isLoading
                ?
                    <SpinnerApp/>
                :
                    error
                    ?
                    <AlertApp message={errorMsg} error={true}/>
                    :
                    succes && <AlertApp message={`${succesMessage}`}/>
            }
        </>
    )
}
