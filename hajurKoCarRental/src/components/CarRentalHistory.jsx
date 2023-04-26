import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import "tailwindcss/tailwind.css";

const CarRentalHistory = () => {
  const rentals = useSelector((state) => state.rental.rentals);
  const users = useSelector((state) => state.user.users);
  const cars = useSelector((state) => state.car.cars);

  const rentalHistory = rentals.map((rental) => {
    const car = cars.find((car) => car.id === rental.carId);
    const customer = users.find((user) => user.id === rental.customerId);
    const staff = users.find((user) => user.id === rental.authorizedBy);
    return {
      ...rental,
      car: `${car.brand} ${car.model}`,
      customer: customer.name,
      staff: staff.name,
    };
  });

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        Car Rental History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Car</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Authorized By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rentalHistory.map((rental) => (
              <TableRow key={rental.id}>
                <TableCell>{rental.car}</TableCell>
                <TableCell>{rental.customer}</TableCell>
                <TableCell>{rental.startDate}</TableCell>
                <TableCell>{rental.endDate}</TableCell>
                <TableCell>{rental.staff}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CarRentalHistory;
