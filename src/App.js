import React, { useState } from "react";
import data from "./mockd-data.json";

const App = () => {
  const [contacts, setContacts] = useState(data);

  console.log(contacts);
  return (
    <div className="app-container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>PhoneNumber</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td scope="row">{contact.fullName}</td>
                <td>{contact.address}t</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2> Add a contact</h2>
      <form>
        <input></input>
      </form>
    </div>
  );
};

export default App;
