import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import "tailwindcss/tailwind.css";

const InactiveCustomers = () => {
  const customers = useSelector((state) =>
    state.user.users.filter((user) => user.role === "customer")
  );
  const rentals = useSelector((state) => state.rental.rentals);

  const currentDate = new Date();
  const threeMonthsAgo = new Date(
    currentDate.setMonth(currentDate.getMonth() - 3)
  );

  const inactiveCustomers = customers.filter((customer) => {
    const customerRentals = rentals.filter(
      (rental) => rental.customerId === customer.id
    );
    return customerRentals.every(
      (rental) => new Date(rental.endDate) < threeMonthsAgo
    );
  });

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        Inactive Customers (No Rentals in Last 3 Months)
      </Typography>
      <List>
        {inactiveCustomers.map((customer) => (
          <ListItem key={customer.id}>
            <ListItemText
              primary={`${customer.name}`}
              secondary={`Email: ${customer.email}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default InactiveCustomers;
