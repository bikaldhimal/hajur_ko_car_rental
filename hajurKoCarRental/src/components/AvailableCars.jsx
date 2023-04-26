import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import "tailwindcss/tailwind.css";

const AvailableCars = () => {
  const cars = useSelector((state) => state.car.cars);
  const rentals = useSelector((state) => state.rental.rentals);

  const unavailableCarIds = rentals.map((rental) => rental.carId);
  const availableCars = cars.filter(
    (car) => !unavailableCarIds.includes(car.id)
  );

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        Available Cars
      </Typography>
      <List>
        {availableCars.map((car) => (
          <ListItem key={car.id}>
            <ListItemText
              primary={`${car.brand} ${car.model}`}
              secondary={`Price per day: ${car.pricePerDay}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AvailableCars;
