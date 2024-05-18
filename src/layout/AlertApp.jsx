
export const AlertApp = ({message, error = false}) => {
    return (
        <p className={`text-white py-1 w-full font-semibold rounded-sm text-center ${error ? "bg-red-600": "bg-green-600"}`}>{message}</p>
    )
}
