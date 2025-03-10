import React from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import OriginDropdown from './OriginDropdown';
import DestinationDropdown from './DestinationDropdown';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Search</h1>
      <form>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="origin">Origin</InputLabel>
          <OriginDropdown />
        </FormControl>
        
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="destination">Destination</InputLabel>
          <DestinationDropdown />
        </FormControl>
        
        <TextField
          id="date"
          label="Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          margin="normal"
        />
        
        <Button type="submit" variant="contained" color="primary" className="redbus-button">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Dashboard;