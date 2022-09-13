import { useState, useEffect } from "react";
import Table from "./table";

function User() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((a) => data.push(a));
  }, []);

  return (
    <div>
      <header>
        <a href="./home">
          <button class="boton__back">BACK</button>
        </a>
      </header>
      <table class="tabla">
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
          <th>Company name</th>
        </tr>
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
      </table>
      <div class="fondo__home">
        <img class="img__fondo" src="../img/user.jpg" alt="" />
      </div>
    </div>
  );
}

export default User;
