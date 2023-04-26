import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import "tailwindcss/tailwind.css";

const CarFilter = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const cars = useSelector((state) => state.car.cars);

  const filteredCars = cars.filter((car) =>
    statusFilter === "All" ? true : car.status === statusFilter
  );

  const handleChange = (event) => {
    setStatusFilter(event.target.value);
  };

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        Car Filter
      </Typography>
      <FormControl fullWidth variant="outlined" className="mb-6">
        <InputLabel>Status</InputLabel>
        <Select value={statusFilter} onChange={handleChange} label="Status">
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Available">Available</MenuItem>
          <MenuItem value="Rented">Rented</MenuItem>
        </Select>
      </FormControl>
      <ul>
        {filteredCars.map((car) => (
          <li key={car.id}>
            {car.brand} {car.model} - {car.year} ({car.status})
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default CarFilter;
