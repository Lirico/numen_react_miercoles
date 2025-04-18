import Tarjeta from "./Tarjeta"



const destinos = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCS8T2EW5FzgScWdX8etBMNoQ1IYwMe_TjQ&s',
    title: 'Villa La Angostura',
    description: 'Un hermoso lugar con pinos y agua cristalina.',
    bgColor: 'green',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbsutGQE0Gs6N4MoB5oP4z1WFVHk26Qjw5A&s',
    title: 'Mendoza Capital',
    description: 'Un maravilloso lugar para hacer rafting y comer tremendo asado con vino.',
    bgColor: 'yellow'
  },
  {
    image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/3f/b7/c1.jpg',
    title: 'El Calafate',
    description: 'Un lugar increible para ver caer trozos de hielo gigantes.',
    bgColor: 'aqua',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBK91rCU3q_MblHlzw2JUDEftOLpj9kuzIw&s',
    title: 'Laferrere',
    description: 'Un lugar del que no volves.',
    bgColor: 'black',
  },
]

const Seccion = () => {
  return (
    <>
        <section>
            <h2>Destinos de la Argentina</h2>
            <div className="cards_list">
                {
                    destinos.map((destino, i) => <Tarjeta key={i} destino={destino} />)
                }
            </div>
        </section>

        <style jsx>{`
            section {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }
            .cards_list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 80%;
            }
        `}</style>
    </>
  )
}

export default Seccion