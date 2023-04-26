import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, TextField, Button } from "@mui/material";
import "tailwindcss/tailwind.css";
// Import your addCar and updateCar actions here

const CarForm = ({ carId = null }) => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car.cars);
  const [carData, setCarData] = useState({
    brand: "",
    model: "",
    year: "",
    status: "",
  });

  useEffect(() => {
    if (carId) {
      const car = cars.find((car) => car.id === carId);
      if (car) setCarData(car);
    }
  }, [carId, cars]);

  const handleChange = (event) => {
    setCarData({ ...carData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (carId) {
      // Call updateCar action with carId and carData
    } else {
      // Call addCar action with carData
    }

    // Reset form fields
    setCarData({
      brand: "",
      model: "",
      year: "",
      status: "",
    });
  };

  return (
    <Box className="max-w-md mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        {carId ? "Edit Car" : "Add Car"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          label="Brand"
          name="brand"
          value={carData.brand}
          onChange={handleChange}
          className="mb-4"
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Model"
          name="model"
          value={carData.model}
          onChange={handleChange}
          className="mb-4"
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Year"
          name="year"
          value={carData.year}
          onChange={handleChange}
          className="mb-4"
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Status"
          name="status"
          value={carData.status}
          onChange={handleChange}
          className="mb-4"
        />
        <Button fullWidth variant="contained" color="primary" type="submit">
          {carId ? "Update Car" : "Add Car"}
        </Button>
      </form>
    </Box>
  );
};

export default CarForm;
