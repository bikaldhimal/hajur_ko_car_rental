import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Alert } from "@mui/lab";
import { ArrowBack } from "@mui/icons-material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
}));

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your password reset logic here, and set emailSent accordingly
  };

  const handleBackClick = () => {
    // Implement your navigation logic here to go back to the previous page
  };

  return (
    <StyledContainer maxwidth="xs">
      <Box
        sx={{
          backgroundColor: "background.paper",
          padding: 4,
          borderRadius: 1,
          boxShadow: 2,
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item component={Link} to="/signin">
            <IconButton onClick={handleBackClick}>
              <ArrowBack />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              align="center"
              sx={{ width: "200px" }}
              //   className="bg-red-500"
            >
              Reset Password
            </Typography>
          </Grid>
        </Grid>
        {emailSent ? (
          <Alert severity="success" sx={{ mt: 4 }}>
            A password reset link has been sent to your email.
          </Alert>
        ) : (
          <form onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ mt: 4 }}
                />
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Alert severity="error">{error}</Alert>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 4 }}
                  className="bg-blue-600/90 hover:bg-blue-600"
                >
                  Send Password Reset Link
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Box>
    </StyledContainer>
  );
};

export default ForgotPassword;
