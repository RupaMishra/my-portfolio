import { Box, Grid, Typography } from "@mui/material";
import logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <Box className="services-root-container" sx={{ py: 5 }}>
      <Grid container lg={8} py={5} justifyContent={"center"}>
        <Grid
          item
          md={4}
          sm={12}
          xs={12}
          sx={{ display: "flex" }}
          className="flex-col-hc-vs"
        >
          <img src={logo} alt="logo" className="footer-logo" />
        </Grid>
        <Grid item lg={4} sm={12} xs={12} className="flex-col-hc-vs">
          <Typography>MAIN</Typography>
          <Typography>Home</Typography>
          <Typography>About</Typography>
          <Typography>Service</Typography>
          <Typography>Projects</Typography>
        </Grid>
        <Grid item lg={4} sm={12} xs={12} className="flex-col-hc-vs">
          <Typography>PAGES</Typography>
          <Typography>Contact</Typography>
          <Typography>Instructions</Typography>
        </Grid>
        <div className="footer-divider"></div>
        <Grid item lg={12} className="flex-r-hsb-vc">
          <Typography>2024</Typography>
          <Typography>Designed by Avinash</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
