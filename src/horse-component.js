import './My-App.css'
import { useState } from 'react';

function HorseComponent() {
  const [name, setName] = useState(' ')
  const [email, setEmail] = useState(' ')

  const handleClick = () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    setName(nameInput.value);
    setEmail(emailInput.value);
  };

    return (
      <div>
        <h2>Registration Form</h2>
        <form>
      <table className="my-table">
      <tbody>
      <tr>
           <td><label htmlFor="name">Name: </label> </td>
           <td><input type="text" id="name" name="name" />
            </td>
          </tr>
          <tr>
           <td><label htmlFor="email">Email: </label> </td>
           <td><input type="text" id="email" name="email" />
            </td>
          </tr>
        <tr>
          <td colSpan="2">
            <button type="button" onClick={handleClick}>Submit</button>
            </td>
        </tr>
      </tbody>
    </table>
    </form>

    <div>
        <h2>Registered</h2>
      <table className="reg-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{email}</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  );
}

export default HorseComponent;