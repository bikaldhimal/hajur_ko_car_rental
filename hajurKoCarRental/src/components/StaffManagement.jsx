import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import "tailwindcss/tailwind.css";
// Import your addStaff, updateStaff, and deleteStaff actions here

const StaffManagement = () => {
  const dispatch = useDispatch();
  const staffList = useSelector((state) => state.user.staff);
  const [open, setOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [staffData, setStaffData] = useState({
    name: "",
    role: "",
    password: "",
  });

  const handleOpen = (staff = null) => {
    if (staff) {
      setSelectedStaff(staff);
      setStaffData({
        name: staff.name,
        role: staff.role,
        password: "",
      });
    } else {
      setSelectedStaff(null);
      setStaffData({
        name: "",
        role: "",
        password: "",
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setStaffData({ ...staffData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedStaff) {
      // Call updateStaff action with selectedStaff.id and staffData
    } else {
      // Call addStaff action with staffData
    }

    handleClose();
  };

  const handleDelete = (staffId) => {
    // Call deleteStaff action with staffId
  };

  return (
    <Box className="max-w-2xl mx-auto py-8 px-4">
      <Typography variant="h4" gutterBottom>
        Staff Management
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Add Staff
      </Button>
      <List>
        {staffList.map((staff) => (
          <ListItem key={staff.id}>
            <ListItemText primary={staff.name} secondary={staff.role} />
            <ListItemSecondaryAction>
              <Button color="primary" onClick={() => handleOpen(staff)}>
                Edit
              </Button>
              <Button color="secondary" onClick={() => handleDelete(staff.id)}>
                Delete
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedStaff ? "Edit Staff" : "Add Staff"}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              label="Name"
              name="name"
              value={staffData.name}
              onChange={handleChange}
              className="mb-4"
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Role"
              name="role"
              value={staffData.role}
              onChange={handleChange}
              className="mb-4"
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              value={staffData.password}
              onChange={handleChange}
              className="mb-4"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {selectedStaff ? "Update Staff" : "Add Staff"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default StaffManagement;
