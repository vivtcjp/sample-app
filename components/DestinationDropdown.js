import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
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
    <FormControl fullWidth margin="normal">
      <InputLabel htmlFor="destination">Destination</InputLabel>
      <Select
        id="destination-dropdown"
        className="destination-dropdown"
        defaultValue=""
      >
        <MenuItem value="">
          <em>Select Destination</em>
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city._id} value={city.name}>
            {city.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DestinationDropdown;