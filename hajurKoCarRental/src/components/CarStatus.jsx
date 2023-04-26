import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import "tailwindcss/tailwind.css";

const CarStatus = () => {
  const cars = useSelector((state) => state.car.cars);
  const rentals = useSelector((state) => state.rental.rentals);

  const rentedCarIds = rentals.map((rental) => rental.carId);
  const rentedCars = cars.filter((car) => rentedCarIds.includes(car.id));
  const availableCars = cars.filter((car) => !rentedCarIds.includes(car.id));

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        Car Status
      </Typography>
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Cars on Rent
        </Typography>
        <List>
          {rentedCars.map((car) => (
            <ListItem key={car.id}>
              <ListItemText
                primary={`${car.brand} ${car.model}`}
                secondary={`Year: ${car.year}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Cars Available
        </Typography>
        <List>
          {availableCars.map((car) => (
            <ListItem key={car.id}>
              <ListItemText
                primary={`${car.brand} ${car.model}`}
                secondary={`Year: ${car.year}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default CarStatus;
