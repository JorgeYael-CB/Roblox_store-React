import { useEffect, useState } from "react";
import { NavBar } from "../layout/NavBar"
import productsState from "../hooks/productsState";
import { ProductApp } from "../layout/ProductApp";
import { SpinnerApp } from "../../layout/SpinnerApp";
import { AlertApp } from "../../layout/AlertApp";



export const HomeApp = () => {
    const {getProducts, paymentProduct, error, errorMsg, succes, succesMsg, isLoading} = productsState();
    const [Products, setProducts] = useState([])


    useEffect(() => {
        //* Hacemos la peticion HTTP para mostrar el producto
        getProducts()
            .then( data => data.products.map( product => setProducts([...Products, product])));
    }, []);

    const onPayment = (nameProduct) => {
        paymentProduct(nameProduct);
    };


    return (
        <>
            <NavBar/>

            <div>
                <div className="mt-24 text-center">
                    <h2 className="font-bold md:text-6xl text-5xl mb-4">Script DragonBloxUltimate</h2>
                    <p className="max-w-xl font-semibold md:text-xl text-base mx-auto">Obten el mejor script de DBU, es lo que los Top globales usan, vuelvete un profesional en el juego y únete a uno los mejores jugadores.</p>
                </div>

                    <div className="mt-48 flex md:flex-row flex-col items-center gap-8 justify-evenly bg-white py-4 shadow-md">
                    <h3 className="font-bold text-4xl text-blue-700">+100 <span className="font-normal text-black">scripts vendidos</span></h3>
                    <h3 className="font-bold text-4xl text-blue-700">+1 <span className="font-normal text-black">año de experiencia</span></h3>
                </div>
            </div>

            <main className="mt-44">
                <h2 className="text-center font-bold text-4xl mb-12">Elige el script perfecto para ti</h2>

                {
                    error
                    &&
                    <AlertApp message={errorMsg} error={error}/>
                }

                {
                    Products.length <= 0 || isLoading
                    ?
                    <SpinnerApp/>
                    :
                    Products.map( product => (
                        <ProductApp key={product.id} product={product} eventSold={onPayment}/>
                    ))
                }
            </main>
        </>
    )
};