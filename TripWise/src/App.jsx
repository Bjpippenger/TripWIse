// File: src/App.jsx
import React, { useState } from 'react';

function App() {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [activities, setActivities] = useState([]);

  const handleDepartureCityChange = (event) => {
    setDepartureCity(event.target.value);
  };

  const handleArrivalCityChange = (event) => {
    setArrivalCity(event.target.value);
  };

  const handleTravelDateChange = (event) => {
    setTravelDate(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform any action needed with flight details, such as fetching activities for the specified cities
    // For now, let's just log the details
    console.log('Departure City:', departureCity);
    console.log('Arrival City:', arrivalCity);
    console.log('Travel Date:', travelDate);
    // You can add further logic here, such as fetching activities for the specified cities
  };

  return (
    <div>
      <h1>TripWise App</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Departure City:
          <input type="text" value={departureCity} onChange={handleDepartureCityChange} />
        </label>
        <br />
        <label>
          Arrival City:
          <input type="text" value={arrivalCity} onChange={handleArrivalCityChange} />
        </label>
        <br />
        <label>
          Travel Date:
          <input type="date" value={travelDate} onChange={handleTravelDateChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>Activities:</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
