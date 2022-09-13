import "../styles/cardRick.css"
function CardRick({image, name, status, species}) {
    return (       
        <div className="card">
          <img src={image} alt="" />
          <div className="text__card">
            <h4>{name}</h4>
            <p>Status: {status}</p>
            <p>Sprecies: {species}</p>
          </div>
        </div>
    )
}

export default CardRick