import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import "tailwindcss/tailwind.css";

const CarDetails = ({ carId }) => {
  const cars = useSelector((state) => state.car.cars);
  const car = cars.find((car) => car.id === carId);

  if (!car) {
    return (
      <Box className="max-w-2xl mx-auto py-8 px-4">
        <Typography variant="h4">Car not found</Typography>
      </Box>
    );
  }

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        {car.brand} {car.model} - {car.year}
      </Typography>
      <Typography variant="h6">Status: {car.status}</Typography>
      <Typography variant="body1" className="mt-4">
        {car.description}
      </Typography>
    </Box>
  );
};

export default CarDetails;
