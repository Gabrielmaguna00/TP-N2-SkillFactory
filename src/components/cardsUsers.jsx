import "../styles/cardsUsers.css";
function CardUser({ name, email, message }) {
  return (
    <div className="user">
      <p>
        <h4>Name:</h4>
        {name}
      </p>
      <p>
        <h4>Email:</h4>
        {email}
      </p>
      <p>
        <h4>Message:</h4>
        {message}
      </p>
    </div>
  );
}

export default CardUser;
