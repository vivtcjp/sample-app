import React, { useState } from 'react';
import { searchBusRoutes } from '../utils/api';

const Homepage = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [weekday, setWeekday] = useState('');

  const handleSearch = async () => {
    try {
      const routes = await searchBusRoutes(origin, destination, weekday);
      console.log(routes);
    } catch (error) {
      console.error('Error fetching bus routes:', error);
    }
  };

  return (
    <div>
      <h1>Search Bus Routes</h1>
      <form>
        <label>
          Origin:
          <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
        </label>
        <label>
          Destination:
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </label>
        <label>
          Weekday:
          <input type="text" value={weekday} onChange={(e) => setWeekday(e.target.value)} />
        </label>
        <button type="button" onClick={handleSearch} style={{ color: 'white' }}>Search</button>
      </form>
    </div>
  );
};

export default Homepage;
