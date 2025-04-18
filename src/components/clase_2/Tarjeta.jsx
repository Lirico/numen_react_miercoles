import Boton from "./Boton"


const Tarjeta = ({destino}) => {

    const {image, title, description, bgColor} = destino;

  return (
    <>
        <div className="card">
            <img src={image} alt="" />
            <div className="text_content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <Boton bgColor={bgColor} />
        </div>

        <style jsx>{`
            .card {
                box-shadow: 0px 1px 5px -2px black;
                width: 200px;
                height: 325px;
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 5px;
            }
            img {
                width: 100%;
                height: 50%;
                object-fit: cover;
            }
            .text_content {
                width: inherit;
            }
            h3, p {
                text-align: center;
                line-height: 1;
            }
            h3 {
                font-size: 1.5rem;
            }
            p {
                font-size: 1rem;
            }
        `}</style>
    </>
  )
}

export default Tarjeta