



const Boton = ({bgColor}) => {
    return (
        <>
            <button>Comprar</button>

            <style jsx>{`
                button {
                    color: white;
                    background-color: ${bgColor};
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    box-shadow: 0px 1px 1px 1px black;
                    text-transform: uppercase;
                    font-family: calibri;
                }
                button:hover {
                    box-shadow: 0px 0px 0px 0px transparent;
                    transform: translateY(1px)
                }
            `}</style>
        </>
    )
}

export default Boton;