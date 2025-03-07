import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DestinationDropdown.css';

const DestinationDropdown = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('/api/cities');
        setCities(response.data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  return (
    <select className="destination-dropdown">
      <option value="">Select Destination</option>
      {cities.map((city) => (
        <option key={city._id} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default DestinationDropdown;
