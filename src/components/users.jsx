import { useState, useEffect } from "react";
import Table from "./table";
import "../styles/users.css";
import { Link } from "react-router-dom";
import fondo from "../img/user.jpg"

function User() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function api() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const datos = await res.json();
      setData(datos);
      return datos;
    }
    api();
  }, []);
  // console.log(data);
  return (
    <div>
      <header>
        <Link to="/home">
          <button className="boton__back">BACK</button>
        </Link>
      </header>
      <table className="tabla">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Company name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => (
            <Table
              key={index}
              name={e.name}
              email={e.website}
              phone={e.phone}
              city={e.address.city}
              id={e.id}
              companyName={e.company.name}
            />
          ))}
        </tbody>
      </table>
      <div className="fondo__home">
        <img className="img__fondo" src={fondo} alt="" />
      </div>
    </div>
  );
}

export default User;
