import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import "tailwindcss/tailwind.css";

const CarDamageReport = () => {
  const cars = useSelector((state) => state.car.cars);
  const damages = useSelector((state) => state.damage.damages);

  const carsWithDamage = cars.filter((car) =>
    damages.some((damage) => damage.carId === car.id)
  );

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        Car Damage Report
      </Typography>
      <List>
        {carsWithDamage.map((car) => (
          <ListItem key={car.id}>
            <ListItemText
              primary={`${car.brand} ${car.model}`}
              secondary={`Car ID: ${car.id}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CarDamageReport;
