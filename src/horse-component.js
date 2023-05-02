import './My-App.css'
import { useState } from 'react';

function HorseComponent() {
  const [horseName, setHorseName] = useState('')
  const [breed, setBreed] = useState('')
  const [yearOfBirth, setYearOfBirth] = useState('')
  const [color, setColor] = useState('')
  const [registeredHorses, setRegisteredHorses] = useState([])

  const handleClick = () => {
    setRegisteredHorses([...registeredHorses, 
      {horseName, breed, yearOfBirth, color}])
  };

    return (
      <div>
        <h2>Registration Form</h2>
        <form>
      <table className="my-table">
      <tbody>
      <tr>
           <td><label htmlFor="horseName">Horse Name: </label> </td>
           <td><input type="text" id="horseName" name="horseName" onChange={e => setHorseName(e.target.value)} />
            </td>
          </tr>
          <tr>
           <td><label htmlFor="yearOfBirth">Year of Birth: </label> </td>
           <td><input type="text" id="yearOfBirth" name="yearOfBirth" onChange={e => setYearOfBirth(e.target.value)}  />
            </td>
          </tr>
          <tr>
           <td><label htmlFor="breed">Breed: </label> </td>
           <td><input type="text" id="breed" name="breed" onChange={e => setBreed(e.target.value)}  />
            </td>
          </tr>
          <tr>
           <td><label htmlFor="color">Color: </label> </td>
           <td><input type="text" id="color" name="color" onChange={e => setColor(e.target.value)}  />
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
            <th>Horse Name</th>
            <th>Year Of Birth</th>
            <th>Breed</th>
            <th>Color</th>
          </tr>
        </thead>
      <tbody>  
        {registeredHorses.map((object, i)=>(
        <tr key={i}>
          <td><strong>{object.horseName}</strong></td>
          <td>{object.yearOfBirth}</td>
          <td>{object.breed}</td>
          <td>{object.color}</td>
        </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  );
}

export default HorseComponent;