import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import "tailwindcss/tailwind.css";

const CarStatistics = () => {
  const cars = useSelector((state) => state.car.cars);
  const rentals = useSelector((state) => state.rental.rentals);

  const rentedCars = rentals.map((rental) => rental.carId);
  const carRentCounts = cars.map((car) => ({
    ...car,
    count: rentedCars.filter((carId) => carId === car.id).length,
  }));

  const mostFrequentCars = carRentCounts.filter((car) => car.count >= 5);
  const notRentedCars = carRentCounts.filter((car) => car.count === 0);

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        Car Statistics
      </Typography>
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Most Frequently Rented Cars
        </Typography>
        <List>
          {mostFrequentCars.map((car) => (
            <ListItem key={car.id}>
              <ListItemText
                primary={`${car.brand} ${car.model}`}
                secondary={`Rented ${car.count} times`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Cars Not Rented
        </Typography>
        <List>
          {notRentedCars.map((car) => (
            <ListItem key={car.id}>
              <ListItemText primary={`${car.brand} ${car.model}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default CarStatistics;
