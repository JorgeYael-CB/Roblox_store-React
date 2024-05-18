import { useState } from "react";

const nameLs = 'UserDVC';
const apiUrl = import.meta.env.VITE_API_URL;

const init = () => {
    const user = JSON.parse(localStorage.getItem(nameLs)) ?? {
        logged: false,
        token: '',
        name: '',
        id: '',
    };
    return user;
};

export default function authState() {
    const user = init();
    const [auth, setAuth] = useState({
        user,
        error: false,
        errorMsg: '',
        isLoading: false,
        succes: false,
        succesMessage: '',
    });

    const validateUserDb = async() => {
        loadingSethAuth();

        if( !getStorage() || !getStorage().token ){
            deleteUserStorage();
            window.location.reload();
        };

        const token = getStorage().token;
        const url = `${apiUrl}/auth/get-user-by-jwt/${token}`;

        const res = await fetch(url);
        const data = await res.json();

        if (data.error) {
            deleteUserStorage();
            window.location.reload();
            return;
        };
    };

    const loadingSethAuth = () => {
        setAuth(auth => ({
            ...auth,
            error: false,
            errorMsg: '',
            isLoading: true,
            succes: false,
            succesMessage: '',
        }));
    };

    const errorSetAuth = (messageError) => {
        setAuth(auth => ({
            ...auth,
            error: true,
            errorMsg: messageError,
            isLoading: false,
            succes: false,
            succesMessage: '',
        }));
    };

    const succesSetAuth = (succesMsg, user = null) => {
        setAuth(auth => ({
            ...auth,
            error: false,
            errorMsg: '',
            isLoading: false,
            succes: true,
            succesMessage: succesMsg,
            user: user ? user : auth.user
        }));
    };

    const userLogged = () => {
        return auth.user.logged ? true : false;
    };

    const onRegisterUser = async ({ name, email, password }) => {
        loadingSethAuth();

        const urlRedirect = `${window.location.href}/verify-account`;
        const url = `${apiUrl}/auth/register-user?urlVerifyAccount=${urlRedirect}`;

        const userData = { name, email, password };

        try {
            const resp = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });
            const data = await resp.json();

            if (data.error) {
                errorSetAuth(data.error);
                return;
            }

            succesSetAuth(data.data.message);
        } catch (error) {
            errorSetAuth(error.message);
        }
    };

    const verifyAccount = async ({ jwt }) => {
        loadingSethAuth();

        const url = `${apiUrl}/auth/verify-user-account/${jwt}`;
        try {
            const res = await fetch(url);
            const data = await res.json();

            if (data.error) {
                errorSetAuth(data.error);
                return;
            }

            succesSetAuth('User Verify!');
        } catch (error) {
            errorSetAuth(error.message);
        }
    };

    const onLoginUser = async ({ email, password }) => {
        loadingSethAuth();

        const url = `${apiUrl}/auth/login-user`;
        const userData = { email, password };

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });
            const data = await res.json();

            if (data.error) {
                errorSetAuth(data.error);
                return;
            }

            const userLogin = {
                logged: true,
                token: data.data.jwt,
                name: data.data.user.name,
                id: data.data.user.id,
            };

            localStorage.setItem(nameLs, JSON.stringify(userLogin));
            succesSetAuth('Login success', userLogin);
        } catch (error) {
            errorSetAuth(error.message);
        }
    };

    const onForgoutPassword = async ({ email }) => {
        loadingSethAuth();

        const urlRedirect = `${window.location.href}/reset-password`;
        const url = `${apiUrl}/auth/forgot-password?urlResetPassword=${urlRedirect}`;

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();

            if (data.error) {
                errorSetAuth(data.error);
                return;
            }

            succesSetAuth('Email Sent!');
        } catch (error) {
            errorSetAuth(error.message);
        }
    };

    const getUserByToken = async ({ token }) => {
        loadingSethAuth();

        const url = `${apiUrl}/auth/get-user-by-jwt/${token}`;
        try {
            const res = await fetch(url);
            const data = await res.json();

            if (data.error) {
                errorSetAuth(data.error);
                return;
            }

            succesSetAuth('', null);
            return data;
        } catch (error) {
            errorSetAuth(error.message);
        }
    };

    const onResetPassword = async ({ newPassword, token }) => {
        loadingSethAuth();
        const url = `${apiUrl}/auth/reset-password/${token}`;

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newPassword }),
            });
            const data = await res.json();

            if (data.error) {
                errorSetAuth(data.error);
                return;
            }

            succesSetAuth(data.message);
        } catch (error) {
            errorSetAuth(error.message);
        }
    };


    const getStorage = () => {
        return JSON.parse( localStorage.getItem(nameLs) );
    };

    const deleteUserStorage  = () => {
        localStorage.removeItem(nameLs);
    };

    const editAccount = async(nameAccount, newNameAccount) => {
        await validateUserDb();

        const body = {
            newProductName: newNameAccount,
            previusProductName: nameAccount,
            token: getStorage().token,
        };

        const url = `${apiUrl}/auth/edit-account`;
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body ),
        });

        const data = await res.json();

        if( data.error ){
            errorSetAuth(data.error);
            return;
        };

        succesSetAuth('new name added');
        window.location.reload();
    }


    return {
        userLogged,
        onRegisterUser,
        verifyAccount,
        getUserByToken,
        loginUser: onLoginUser,
        forgotPassword: onForgoutPassword,
        resetPassword: onResetPassword,
        getStorage,
        deleteUserStorage,
        editAccount,
        ...auth,
    };
}