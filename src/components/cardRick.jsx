import "../styles/cardRick.css"
function CardRick({data}) {
    return (       
        <div className="card">
          <img src={data.image} alt="" />
          <div className="text__card">
            <h4>{data.name}</h4>
            <p>Status: {data.status}</p>
            <p>Sprecies: {data.species}</p>
          </div>
        </div>
    )
}

export default CardRick