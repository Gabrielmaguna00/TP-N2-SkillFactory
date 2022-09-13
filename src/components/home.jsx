import Api from "./api";
import Form from "./form";
import User from "./users";
import "../styles/home.css";
import home from "../img/home.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container">
        <h2>TP 2 Skill Factory</h2>
        <Link to={"/form"}>
          <div className="cards" id="form">
            <h2>Forms</h2>
          </div>
        </Link>
        <Link to={"/users"}>
          <div className="cards" id="user">
            <h2>Users</h2>
          </div>
        </Link>
        <Link to={"/rick-morty"}>
          <div className="cards" id="api">
            <Api />
          </div>
        </Link>
      </div>
      <div className="fondo__home">
        <img className="img__fondo" src={home} alt="" />
      </div>
    </div>
  );
}

export default Home;
