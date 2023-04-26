import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "tailwindcss/tailwind.css";

const StaffDashboard = () => {
  const handleAddCar = () => {
    // Implement logic to add a new car for rent
  };

  const handlePublishOffer = () => {
    // Implement logic to publish a new offer
  };

  const handleValidateRequest = () => {
    // Implement logic to validate a customer's rental request
  };

  const handleChangePassword = () => {
    // Implement logic to change the staff member's password
  };

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        Staff Dashboard
      </Typography>
      <Box className="space-y-4">
        <Button variant="contained" color="primary" onClick={handleAddCar}>
          Add Car for Rent
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePublishOffer}
        >
          Publish Offer
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleValidateRequest}
        >
          Validate Rental Request
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleChangePassword}
        >
          Change Password
        </Button>
      </Box>
    </Box>
  );
};

export default StaffDashboard;
