// File: src/ActivitiesPage.jsx
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function ActivitiesPage({ arrivalCity, travelDates }) {
  const [activities, setActivities] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // Fetch activities data for the specified destination city and travel dates
    // Replace this with actual data fetching logic
    fetchActivities(arrivalCity, travelDates).then(data => setActivities(data));
    // Ensure to replace `fetchActivities` with your actual function to fetch activities data
    // Ensure to handle errors and loading state appropriately
  }, [arrivalCity, travelDates]);

  const handleActivitySelection = (activity) => {
    // Toggle activity selection
    setSelectedActivities(prevSelected => {
      if (prevSelected.includes(activity)) {
        return prevSelected.filter(selected => selected !== activity);
      } else {
        return [...prevSelected, activity];
      }
    });
  };

  const handleBackToHome = () => {
    // Navigate back to the homepage
    history.push('/');
  };

  return (
    <div>
      <h2>Activities in {arrivalCity}</h2>
      <button onClick={handleBackToHome}>Back to Home</button>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedActivities.includes(activity)}
                onChange={() => handleActivitySelection(activity)}
              />
              {activity.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivitiesPage;
