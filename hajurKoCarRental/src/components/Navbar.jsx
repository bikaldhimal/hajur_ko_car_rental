import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="static" className="bg-white text-slate-700 shadow-lg">
        <Toolbar className="container mx-auto px-4">
          <div className="flex justify-between items-center w-full">
            <Typography variant="h6" component="div">
              <img className="w-8 h-8" src={logo} alt="" />
            </Typography>
            <div className="hidden sm:flex space-x-12">
              <Typography
                className="cursor-pointer hover:underline underline-offset-4"
                variant="body1"
                component={Link}
                to="/"
              >
                Home
              </Typography>
              <Typography
                className="cursor-pointer hover:underline underline-offset-4"
                variant="body1"
                component={Link}
                to="/services"
              >
                Services
              </Typography>
              <Typography
                className="cursor-pointer hover:underline underline-offset-4"
                variant="body1"
                component={Link}
                to="/contact-us"
              >
                Contact Us
              </Typography>
              <Typography
                className="cursor-pointer hover:underline underline-offset-4"
                variant="body1"
                component={Link}
                to="/signup"
              >
                Get Started
              </Typography>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar alt="User Avatar" src="" />
              <Typography variant="body2" component="div">
                Role
              </Typography>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
                className="sm:hidden"
              >
                <MenuIcon />
              </IconButton>
            </div>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    zIndex: 0,
                    transform: "translateY(-50%) rotate(45deg)",
                    boxShadow: "rgba(0, 0, 0, 0.295) 0px 3px 1px -2px",
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem className="text-black">Home</MenuItem>
              <MenuItem className="text-black">Service</MenuItem>
              <MenuItem className="text-black">Contact Us</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
