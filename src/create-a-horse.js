import React, { useState } from 'react';
import './My-App.css';

function Horses() {
  const [eventCount, setEventCount] = useState(0);
  const [barnname, setBarnname] = useState('[choose barn]');
  const [name, setName] = useState('[choose name]');
  const [age, setAge] = useState('[choose age]');
  const [color, setColor] = useState('[choose color]');
  const [breed, setBreed] = useState('[choose a breed]');
  const [sex, setSex] = useState('[choose sex]');
  const [bio, setBio] = useState('');

  const handleChange = event => {
    setBarnname(event.target.value);
  };

  const buyClick = event => {
    setEventCount(eventCount + 1);
    alert('You bought a horse!');
  };

  const sellClick = event => {
    setEventCount(eventCount - 1);
    alert('You sold a horse');
  };
   
  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleAgeChange = event => {
    setAge(event.target.value);
  };

  const handleColorChange = event => {
    setColor(event.target.value);
  };

  const handleBreedChange = event => {
    setBreed(event.target.value);
  };

  const handleSexChange = event => {
    setSex(event.target.value);
  };

  const handleBioChange = event => {
    setBio(event.target.value);
  };
  
  return (
    <div>
      <h1>Choose A Barn Name</h1>
      <p>Enter your barn's name: <input onChange={handleChange}/></p>
      <p>Your barn's name is: <strong>{barnname}</strong></p>
      <h1>Buy Or Sell A Horse</h1>
      <p><button onClick={buyClick}>Buy a Horse</button> <button onClick={sellClick}>Sell a Horses</button></p>
      <p>There are {eventCount} horses at {barnname}!</p>
      <h1>Create A Horse</h1>
      <p>Choose a name: <input onChange={handleNameChange}/></p>
      <p>Choose a age: <input onChange={handleAgeChange}/></p>
      <p>Choose a color: <select onChange={handleColorChange}>
          <option value="Select Color">Select Color</option>
          <option value="Bay">Bay</option>
          <option value="Sorrel">Sorrel</option>
          <option value="Black">Black</option>
        </select>
      </p>
      <p>Choose a Breed: <input onChange={handleBreedChange}/></p>
      <p>Choose a sex: <select onChange={handleSexChange}>
          <option value="Select Sex">Select Sex</option>
          <option value="Mare">Mare</option>
          <option value="Stallion">Stallion</option>
          <option value="Gelding">Gelding</option>
        </select>
      </p>
      <p>{name} is a {age} {color} {breed} {sex}. {name} lives at {barnname}.</p>
      <p>Tell us about {name}.</p>
      <p><textarea onChange={handleBioChange}></textarea></p>
      <p>{bio}</p>
    </div>
  );
}

export default Horses;