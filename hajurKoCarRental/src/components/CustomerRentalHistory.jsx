import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import "tailwindcss/tailwind.css";

const CustomerRentalHistory = ({ customerId }) => {
  const rentals = useSelector((state) => state.rental.rentals);

  const customerRentals = rentals.filter(
    (rental) => rental.customerId === customerId
  );

  if (customerRentals.length === 0) {
    return (
      <Box className="max-w-2xl mx-auto py-8 px-4">
        <Typography variant="h4">No rental history found</Typography>
      </Box>
    );
  }

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        Rental History
      </Typography>
      <List>
        {customerRentals.map((rental) => (
          <ListItem key={rental.id}>
            <ListItemText
              primary={`${rental.carBrand} ${rental.carModel} - ${rental.carYear}`}
              secondary={`Rented from ${rental.startDate} to ${rental.endDate}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CustomerRentalHistory;
