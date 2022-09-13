import "../styles/table.css"
function Table({ name, id, email, phone, companyName }) {
  return (
      <tr>
        <td>{name}</td>
        <td>{id}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{companyName}</td>
        <td>{companyName}</td>
      </tr>
  );
}
export default Table;
