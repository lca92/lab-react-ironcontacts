import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  const firstFiveContacts = contacts.slice(0, 5);
  const remainingContacts = contacts.slice(5);
  const [contact, setContact] = useState(firstFiveContacts);

  const getRandomContact = () => {
    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    const showContacts = [...contact, randomContact];
    setContact(showContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button type="button" onClick={getRandomContact}>
        Add Random Contact
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="Contact" />
                </td>
                <td>{contact.name}</td>
                <td>{Math.round(contact.popularity * 100) / 100}</td>
                <td>{contact.wonOscar ? <h1>🏆</h1> : ""}</td>
                <td>{contact.wonEmmy ? <h1>🏆</h1> : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
