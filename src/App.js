import React, { useState } from 'react';

import './App.css';

function App() {
  
  const[zipcode, setZipcode] = useState(0);
  const[name, setName] = useState("");
  const[temperature, setTemperature] = useState(0);
  
  const handleChange = (event) => {
    setZipcode(event.target.value);

  };


  const handleSubmit = () => {

    console.log(zipcode);
    const info = fetch('https://api.openweathermap.org/data/2.5/weather?zip=' 
    + zipcode + '&appid=384530a26df84465ffe7e9419c8ef8db');
    info
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setName(data.name);
        setTemperature(data.main.temp);
      });
  }
  
  
  return (
    <div>
      <form onSubmit = {handleSubmit}>
      <input
      type = "text"
      name = "zipcode"
      value = {zipcode}
      onChange = {handleChange}
      />

      <button type = "button" onClick = {handleSubmit}>submit</button>
      </form>

      <h2>Zipcode: {zipcode}</h2>
      <h2>City Name: {name}</h2>
      <h2>Temperature: {temperature} degrees</h2>

    </div>
  );
}

export default App;