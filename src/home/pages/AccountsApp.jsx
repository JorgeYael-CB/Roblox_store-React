import { useEffect, useState } from "react";
import authState from "../../auth/hook/authState";
import { AlertApp } from "../../layout/AlertApp";
import { SpinnerApp } from "../../layout/SpinnerApp";
import { NavBar } from "../layout/NavBar"
import { Navigate } from "react-router-dom";
import { AccountApp } from "../../layout/AccountApp";



export const AccountsApp = () => {
    const {getUserByToken, error, errorMsg, isLoading, succes, succesMessage, getStorage, deleteUserStorage, userLogged} = authState();
    const [Accounts, setAccounts] = useState([]);
    const [Name, setName] = useState('');
    const [errorUser, setErrorUser] = useState(false);

    if( !userLogged() ){
        return <Navigate to={'/'}/>
    };

    useEffect(() => {
        setName(getStorage().name);
    }, []);

    useEffect(() => {
        const token = getStorage().token;
        getUserByToken({token})
            .then( data => {
                setAccounts(data.data.user.buyerAccounts);
            });
    }, []);

    useEffect(() => {
        setErrorUser(error);
        if( errorUser ){
            //* Lo borramos de localstorage
            deleteUserStorage()

            return <Navigate to='/auth/login'/>
        };
    }, [error]);


    return (
        <>
            <NavBar/>

            <div className="text-center m-28">
                <h1 className="font-bold text-4xl">Welcome {Name}</h1>
                <p className="max-w-xl mx-auto mt-4 font-normal">In this section you can view and edit the accounts you have purchased.</p>
                <hr/>
            </div>

            <main>
                {
                    isLoading
                    ?
                    <SpinnerApp/>
                    :
                        Accounts <= 0
                        ?
                        <AlertApp message={'Aún no tienes ninguna cuenta comprada, accede a la página principal para agregar una nueva cuenta'}/>
                        :
                        Accounts.map( (account, index) => (
                            <AccountApp key={index} account={account} index={index + 1}/>
                        ))
                }
                <hr className="mt-28"/>
            </main>
        </>
    )
};