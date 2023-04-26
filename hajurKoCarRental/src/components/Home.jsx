import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import car from "../../src/assets/car.png";
import CarList from "./CarList";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div className="">
      <div style={{ position: "relative" }}>
        <Box className="bg-gradient-to-r from-slate-400 via-gray-500 to-slate-500">
          <div maxwidth="lg" className="py-12 px-14">
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              className=""
            >
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  className="text-white font-bold"
                >
                  We Provide Reliable & Luxury Cars for Rent
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  className="text-white mt-4 pr-32"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className="hidden md:block">
                <img
                  src={car}
                  alt="Car with a pleasant background"
                  className="w-full h-auto object-cover"
                />
              </Grid>
            </Grid>
          </div>
        </Box>
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <SearchBar />
        </div>
      </div>
      <CarList />
    </div>
  );
};

export default Home;
