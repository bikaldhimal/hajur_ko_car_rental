import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
} from "@mui/material";
import "tailwindcss/tailwind.css";

const CustomerDashboard = () => {
  const customer = useSelector((state) => state.user.customer); // Replace with the correct state selector
  const rentals = useSelector((state) => state.rental.rentals);
  const offers = useSelector((state) => state.offer.offers);
  const cars = useSelector((state) => state.car.cars);

  const customerRentals = rentals.filter(
    (rental) => rental.customerId === customer.id
  );

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        Customer Dashboard
      </Typography>
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Rental History
        </Typography>
        <List>
          {customerRentals.map((rental) => {
            const car = cars.find((car) => car.id === rental.carId);
            return (
              <ListItem key={rental.id}>
                <ListItemText
                  primary={`${car.brand} ${car.model}`}
                  secondary={`Rented from ${rental.startDate} to ${rental.endDate}`}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Special Offers
        </Typography>
        <List>
          {offers.map((offer) => (
            <ListItem key={offer.id}>
              <ListItemText
                primary={offer.title}
                secondary={offer.description}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Cars Available for Rent
        </Typography>
        <List>
          {cars.map((car) => (
            <ListItem key={car.id}>
              <ListItemText
                primary={`${car.brand} ${car.model}`}
                secondary={`Year: ${car.year}`}
              />
              <ListItemSecondaryAction>
                <Button variant="contained" color="primary">
                  Rent
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default CustomerDashboard;
