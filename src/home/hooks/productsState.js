import { useState } from "react";
import authState from "../../auth/hook/authState";

const urlApi = import.meta.env.VITE_API_URL;


export default function productsState() {
    const {user} = authState();
    const [apiProduct, setApiProduct] = useState({
        error: false,
        succes: false,
        errorMsg: '',
        succesMsg: '',
        isLoading: false,
    });


    const loading = () => {
        setApiProduct({
            ...apiProduct,
            isLoading: true
        });
    };

    const succesApi = (succesMsg) => {
        setApiProduct({
            ...apiProduct,
            isLoading: false,
            error: false,
            errorMsg: '',
            succes: true,
            succesMsg,
        });
    };

    const errorApi = (errorMsg) => {
        setApiProduct({
            ...apiProduct,
            isLoading: false,
            error: true,
            errorMsg,
            succes: false,
            succesMsg: '',
        });
    };


    const getProducts = async() => {
        const url = `${urlApi}/products/get-products`;
        const data = await fetch(url);

        return await data.json();
    };

    const paymentProduct = async(productName) => {
        loading();

        if( !user.logged ){
            errorApi('In order to purchase you need to log in.');
            return;
        };

        const token = user.token;
        const urlSucces = `${window.location.href}/accounts`;
        const urlCancel = `${window.location.href}`;

        const url = `${urlApi}/products/sold-product/${token}?name=${productName}&urlCancel=${urlCancel}&urlSucces=${urlSucces}`;
        const res = await fetch(url);
        const data = await res.json();

        succesApi('Redireccionando al usuario...');
        //* Lo retornamos al pago
        window.location.href = `${data.data.urlPayment}`;
    };



    return {
        getProducts,
        paymentProduct,
        ...apiProduct,
    }
}
