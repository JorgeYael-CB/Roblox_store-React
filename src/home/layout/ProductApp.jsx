import { AlertApp } from "../../layout/AlertApp";

export const ProductApp = ({product, eventSold}) => {
    const { available, description, id, name, price, img} = product;

    return (
        <div className="shadow-md p-4 max-w-lg mx-auto mt-28 bg-black text-white rounded-sm mb-12">
            {
                available
                ?
                <AlertApp message={'Disponible'}/>
                :
                <AlertApp message={'No disponible'} error={true}/>
            }
            <p className="hidden">{id}</p>
            <h3 className="mt-6 text-center font-semibold text-2xl text-white mb-8 rounded-sm">{name}</h3>
            <hr />
            <p className="mt-4 max-w-80 text-center mx-auto my-12">{description}</p>
            <hr />

            <div className="flex justify-center">
                <button
                    onClick={ () => eventSold(name) }
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 w-full transition-all duration-200">
                    Comprar ${price} MXN
                </button>
            </div>
        </div>
    )
};