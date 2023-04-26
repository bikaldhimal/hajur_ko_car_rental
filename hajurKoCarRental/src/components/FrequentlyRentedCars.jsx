import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import "tailwindcss/tailwind.css";

const FrequentlyRentedCars = () => {
  const cars = useSelector((state) => state.car.cars);
  const rentals = useSelector((state) => state.rental.rentals);

  const carRentCount = {};

  rentals.forEach((rental) => {
    if (carRentCount[rental.carId]) {
      carRentCount[rental.carId]++;
    } else {
      carRentCount[rental.carId] = 1;
    }
  });

  const frequentlyRentedCars = cars
    .map((car) => ({ ...car, rentCount: carRentCount[car.id] || 0 }))
    .sort((a, b) => b.rentCount - a.rentCount)
    .slice(0, 5);

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        Frequently Rented Cars
      </Typography>
      <List>
        {frequentlyRentedCars.map((car) => (
          <ListItem key={car.id}>
            <ListItemText
              primary={`${car.brand} ${car.model}`}
              secondary={`Rented ${car.rentCount} times`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FrequentlyRentedCars;
