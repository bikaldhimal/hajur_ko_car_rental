import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import "tailwindcss/tailwind.css";

const CarCard = styled(Box)(({ theme }) => ({
  boxShadow: theme.shadows[1],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  transition: "0.3s",
  "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "translateY(-3px)",
  },
}));

const CarList = () => {
  const cars = useSelector((state) => state.car.cars);
  return (
    <Box className="max-w-2xl mx-auto py-20 px-4">
      <Typography variant="h4" gutterBottom>
        Car Inventory
      </Typography>
      <List>
        {cars.map((car) => (
          <CarCard key={car.id}>
            <ListItem disableGutters>
              <ListItemAvatar>
                <Avatar variant="rounded" src={car.image} />
              </ListItemAvatar>
              <ListItemText
                primary={`${car.brand} ${car.model} - ${car.year}`}
                secondary={`Status: ${car.status}`}
              />
            </ListItem>
          </CarCard>
        ))}
      </List>
    </Box>
  );
};

export default CarList;
