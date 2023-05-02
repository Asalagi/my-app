import './My-App.css'
import { useState, useEffect } from 'react';

function HorseComponent() {
  const [horseName, setHorseName] = useState('')
  const [breed, setBreed] = useState('')
  const [yearOfBirth, setYearOfBirth] = useState('')
  const [sex, setSex] = useState('')
  const [color, setColor] = useState('')
  const [nextId, setNextId] = useState(+1);
  const [registeredHorses, setRegisteredHorses] = useState([])

  useEffect(() => {
    const storedHorses = localStorage.getItem('registeredHorses');
    if (storedHorses) {
      setRegisteredHorses(JSON.parse(storedHorses));
    }
  }, []);

  const handleClick = () => {
    const newHorse = {id: nextId, horseName, breed, yearOfBirth, sex, color};
    setRegisteredHorses([...registeredHorses, newHorse]);
    setNextId(nextId + 1);
    localStorage.setItem('registeredHorses', JSON.stringify([...registeredHorses, newHorse]));
  };

    return (
      <div>
        <h2>Registration Form</h2>
        <form>
      <table className="my-table">
      <thead>
         <tr>
           <th><label htmlFor="horseName">Horse Name </label> </th>
           <td><input type="text" id="horseName" name="horseName" onChange={e => setHorseName(e.target.value)} />
            </td>
          </tr>
          <tr>
           <th><label htmlFor="yearOfBirth">Year of Birth </label> </th>
           <td><input type="text" id="yearOfBirth" name="yearOfBirth" onChange={e => setYearOfBirth(e.target.value)} />
            </td>
          </tr>
          <tr>
           <th><label htmlFor="breed">Breed </label> </th>
           <td><input type="text" id="breed" name="breed" onChange={e => setBreed(e.target.value)} />
            </td>
          </tr>
          <tr>
           <th><label htmlFor="sex">Sex </label> </th>
           <td><input type="text" id="sex" name="sex" onChange={e => setSex(e.target.value)} />
            </td>
          </tr>
          <tr>
           <th><label htmlFor="color">Color </label> </th>
           <td><input type="text" id="color" name="color" onChange={e => setColor(e.target.value)} />
            </td>
          </tr>
         <tr>
          <td colSpan="2">
            <button type="button" onClick={handleClick}>Submit</button>
            </td>
        </tr>
      </thead>
    </table>
    </form>

    <div>
        <h2>Registered</h2>
      <table className="reg-table">
        <thead>
          <tr>
            <th>ID#</th>
            <th>Horse Name</th>
            <th>Year Of Birth</th>
            <th>Breed</th>
            <th>Sex</th>
            <th>Color</th>
          </tr>
        </thead>
      <tbody>  
        {registeredHorses.map((object, i)=>(
        <tr key={i}>
          <td><strong>{object.id}</strong></td>
          <td>{object.horseName}</td>
          <td>{object.yearOfBirth}</td>
          <td>{object.breed}</td>
          <td>{object.sex}</td>
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