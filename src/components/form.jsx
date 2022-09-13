import { useState } from "react";
import "../styles/form.css";
import fondo from "../img/form.png";
import CardUser from "./cardsUsers";

function Form() {
  const [usuarios, setUsuarios] = useState([]);
  const [input, setInput] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // usuarios.push(input);
    setUsuarios([...usuarios, input])
    setInput({ name: "", email: "", message: "" });
  };
  // console.log(usuarios);
  return (
    <div>
      <header>
        <a href="./home">
          <button className="boton__back">BACK</button>
        </a>
      </header>
      <form action="">
        <ul>
          <div className="form__CreateRecipe">
            <label>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            <label>Email:</label>
            <input
              type="email"
              id="mail"
              name="email"
              value={input.email}
              onChange={(e) => handleChange(e)}
            />
            <label>Message:</label>
            <textarea
              id="msg"
              name="message"
              value={input.message}
              onChange={(e) => handleChange(e)}
            ></textarea>
            {input.name !== "" &&
            input.name.length > 3 &&
            input.email !== "" &&
            input.email.length > 8 &&
            input.message !== "" &&
            input.message.length > 5 ? (
              <button type="submit" id="btn" onClick={(e) => handleSubmit(e)}>
                send your message
              </button>
            ) : null}
          </div>
        </ul>
      </form>
      <div className="containerCard">
        <div className="cardsUser">
          {usuarios.length
            ? usuarios.map((e) => (
                <CardUser name={e.name} email={e.email} message={e.message} />
              ))
            : null}
        </div>
      </div>
      <div className="fondo__home">
        <img className="img__fondo" src={fondo} alt="" />
      </div>
    </div>
  );
}

export default Form;
