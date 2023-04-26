import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import "tailwindcss/tailwind.css";

const daysInactive = (lastRentalDate) => {
  const currentDate = new Date();
  const lastDate = new Date(lastRentalDate);
  const diffTime = Math.abs(currentDate - lastDate);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const FrequentCustomers = () => {
  const customers = useSelector((state) => state.user.customers);
  const rentals = useSelector((state) => state.rental.rentals);

  const frequentCustomers = customers.filter((customer) => {
    const customerRentals = rentals.filter(
      (rental) => rental.customerId === customer.id
    );
    return customerRentals.length >= 5;
  });

  const inactiveCustomers = customers.filter((customer) => {
    const customerRentals = rentals.filter(
      (rental) => rental.customerId === customer.id
    );
    const lastRental = customerRentals.sort(
      (a, b) => new Date(b.endDate) - new Date(a.endDate)
    )[0];
    return lastRental && daysInactive(lastRental.endDate) >= 90;
  });

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        Frequent Customers
      </Typography>
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Frequent Renters
        </Typography>
        <List>
          {frequentCustomers.map((customer) => (
            <ListItem key={customer.id}>
              <ListItemText
                primary={customer.name}
                secondary={`Email: ${customer.email}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Inactive Customers (3 months)
        </Typography>
        <List>
          {inactiveCustomers.map((customer) => (
            <ListItem key={customer.id}>
              <ListItemText
                primary={customer.name}
                secondary={`Email: ${customer.email}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default FrequentCustomers;
