import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import "tailwindcss/tailwind.css";

const SpecialOffers = () => {
  const offers = useSelector((state) => state.offer.offers);

  if (offers.length === 0) {
    return (
      <Box className="max-w-2xl mx-auto py-8 px-4">
        <Typography variant="h4">No special offers available</Typography>
      </Box>
    );
  }

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        Special Offers
      </Typography>
      <List>
        {offers.map((offer) => (
          <ListItem key={offer.id}>
            <ListItemText
              primary={offer.title}
              secondary={`Valid from ${offer.startDate} to ${offer.endDate}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SpecialOffers;
