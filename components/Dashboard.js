import React from 'react';
import OriginDropdown from './OriginDropdown';
import DestinationDropdown from './DestinationDropdown';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Search</h1>
      <form>
        <label htmlFor="origin" style={{ fontWeight: 'bold' }}>Origin:</label>
        <OriginDropdown />
        
        <label htmlFor="destination" style={{ fontWeight: 'bold' }}>Destination:</label>
        <DestinationDropdown />
        
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" />
        
        <button type="submit" className="redbus-button">Search</button>
      </form>
    </div>
  );
};

export default Dashboard;