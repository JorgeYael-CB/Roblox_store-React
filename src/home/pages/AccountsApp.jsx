import { useEffect, useState } from "react";
import authState from "../../auth/hook/authState";
import { AlertApp } from "../../layout/AlertApp";
import { SpinnerApp } from "../../layout/SpinnerApp";
import { NavBar } from "../layout/NavBar"



export const AccountsApp = () => {
    const {getUserByToken, error, errorMsg, isLoading, succes, succesMessage, getStorage} = authState();
    const [User, setUser] = useState({
        name: '',
        buyerAccounts: [],
    });


    useEffect(() => {
        const token = getStorage().token;
        getUserByToken({token})
            .then( data => {
                setUser({
                    ...User,
                    name: data.data.user.name,
                    buyerAccounts: data.data.user.buyerAccounts,
                })
            });
    }, [])



    return (
        <>
            <NavBar/>

            <div className="text-center m-28">
                <h1 className="font-bold text-4xl">Welcome John Doe</h1>
                <p className="max-w-xl mx-auto mt-4 font-normal">In this section you can view and edit the accounts you have purchased.</p>
                <hr/>
            </div>

            <main>
                {
                    isLoading
                    ?
                    <SpinnerApp/>
                    :
                        User.buyerAccounts.length <= 0
                        ?
                        <AlertApp message={'Aún no tienes ninguna cuenta comprada, accede a la página principal para agregar una nueva cuenta'}/>
                        :
                        <AlertApp message={'Se estan cargando'}/>
                }
                <hr className="mt-28"/>
            </main>
        </>
    )
};