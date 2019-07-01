import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default function CustomSelect({ value, handleChange }) {
  return (
    <div>
      <InputLabel htmlFor="filter">Filter KM</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        inputProps={{
          name: 'filter',
          id: 'filter',
        }}
      >
        <MenuItem value={10}>10 KM</MenuItem>
        <MenuItem value={25}>25 KM</MenuItem>
        <MenuItem value={50}>50 KM</MenuItem>
        <MenuItem value={100}>100 KM</MenuItem>
        <MenuItem value={250}>250 KM</MenuItem>
        <MenuItem value={500}>500 KM</MenuItem>
      </Select>
    </div>
  );
}
