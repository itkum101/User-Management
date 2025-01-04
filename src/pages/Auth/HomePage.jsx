import React from "react";
import { Grid, Container, Box, Button, Typography, Paper } from "@mui/material";
// import Header from "../../components/layout/Header";
// import Footer from "../../components/layout/Footer";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file

const HomePage = () => {
  return (
    <div className="home-page-container">
      {/* <Header /> */}

      <Container className="home-page-content" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper className="main-section">
              <Typography variant="h3" align="center" gutterBottom>
                Welcome to the Student Portal
              </Typography>
              <Typography variant="h5" paragraph align="center">
                Empowering education with seamless user experiences. Join us today and make learning more efficient.
              </Typography>
              <div className="centered-button">
                <Link to="/register" className="link">
                  <Button variant="contained" className="get-started-btn">
                    Get Started
                  </Button>
                </Link>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
