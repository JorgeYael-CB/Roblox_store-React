import { useState } from "react";
import authState from "../auth/hook/authState";
import { AlertApp } from "./AlertApp"
import { SpinnerApp } from "./SpinnerApp";

export const AccountApp = ({account, index}) => {
    const {editAccount, error, errorMsg, succes, succesMessage, isLoading} = authState();
    const [ModeEdit, setModeEdit] = useState(false);
    const [NewName, setNewName] = useState('');


    const onModeEdit = () => {
        setModeEdit(true);
    };

    const onChange = ({target}) => {
        const {value} = target;
        setNewName(value);
    }

    const confirmNewName = (previousAccount) => {
        editAccount(previousAccount, NewName);
    };


    return (
        <>
            {
                isLoading
                ?
                <SpinnerApp/>
                :
                <div className="shadow-xl p-4 max-w-lg bg-white mx-auto mb-8">
                    <h5 className="text-center font-semibold my-4">Account #{index}</h5>
                    <div className="flex flex-row justify-evenly items-center mb-2 bg-gray-100 p-2">
                        <h4 className="font-bold">Name: <span className="font-normal">{account}</span> </h4>
                        <button
                            onClick={ onModeEdit }
                        >
                            <img className="w-6" src="/store/icon-edit.png" alt="Icon edit" />
                        </button>
                    </div>

                    {
                        ModeEdit
                        &&
                        <div>
                            <div className="flex flex-row items-center">
                                <h4 className="font-semibold">New Name:</h4>
                                <input onChange={onChange} value={NewName} className="rounded-md shadow-sm border border-gray-500 m-5 p-1 font-semibold" type="text"/>
                            </div>
                            <div>
                                <button onClick={ () => confirmNewName(account) } className="w-full py-1 rounded-md bg-blue-600 text-white font-bold mb-3 hover:bg-blue-800 transition-all duration-300">Confirm</button>
                            </div>
                        </div>
                    }

                    <AlertApp message={'Active'}/>
                </div>
            }
        </>
    )
};