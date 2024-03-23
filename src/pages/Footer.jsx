import { Box, Grid, Typography } from "@mui/material";
import logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <Box className="services-root-container" sx={{ py: 5 }}>
      <Grid container sx={{ width: "70%", py: 5 }}>
        <Grid
          item
          md={4}
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          <img src={logo} alt="logo" className="footer-logo" />
        </Grid>
        <Grid item md={4} className="flex-co    l-hc-vs">
          <Typography>MAIN</Typography>
          <Typography>Home</Typography>
          <Typography>About</Typography>
          <Typography>Service</Typography>
          <Typography>Projects</Typography>
        </Grid>
        <Grid item md={4} className="flex-col-hc-vs">
          <Typography>PAGES</Typography>
          <Typography>Contact</Typography>
          <Typography>Instructions</Typography>
        </Grid>
        <div className="footer-divider"></div>
        <Grid item md={12} className="flex-r-hsb-vc">
          <Typography>2024</Typography>
          <Typography>Designed by Avinash</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
