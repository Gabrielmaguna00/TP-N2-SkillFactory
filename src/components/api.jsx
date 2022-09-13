import { useEffect, useState } from "react";
import fondo from "../img/rick-y-morty-retrowave-synthwave_7680x4320_xtrafondos.com.jpg";
import CardRick from "./cardRick";
import "../styles/api.css";
import { Link } from "react-router-dom";

function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const rickAndMorty = fetch("https://rickandmortyapi.com/api/character");
    rickAndMorty
      .then((data) => data.json())
      .then((data) => setData(data.results));
  }, []);
  console.log(data);
  return (
    <div>
      <header>
        <Link to="/home">
          <button className="boton__back">BACK</button>
        </Link>
      </header>{" "}
      <div className="rick" id="rick">
        {data.length !== 0 ? data.map((e) => <CardRick image={e.image} name={e.name} status={e.status} species={e.species} />) : null}
      </div>
      <div className="fondo__home">
        <img className="img__fondo" src={fondo} alt="" />
      </div>
    </div>
  );
}

export default Api;
