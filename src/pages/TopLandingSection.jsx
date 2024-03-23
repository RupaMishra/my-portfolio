/* eslint-disable react/no-unescaped-entities */
import { Box, Grid, Typography } from "@mui/material";
import { Colors } from "../utils/constants";
import landing01 from "../assets/images/01-landing.webp";

const TopLandingSection = () => {
  return (
    <Grid container className="flex-r-hc" sx={{ py: 2 }}>
      <Box
        sx={{
          display: "flex",
          width: "75%",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          md={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "11px", letterSpacing: "4px" }}>
            PORTFOLIO
          </Typography>
          <Typography
            sx={{
              fontSize: "70px",
              letterSpacing: "1px",
              lineHeight: "75px",
              fontWeight: 550,
              my: 5,
            }}
          >
            HELLO! <span className="light-blue-font">I'M</span> A <br />
            WEB DESIGNER+ <span className="light-blue-font">DEVELOPER</span>
          </Typography>
          <Typography
            sx={{ fontSize: "14px", color: Colors.greytext, width: "70%" }}
          >
            Beautiful design has the power to capitivate audiences and drive
            business growth. Specializing in creating stunning designs that
            transfom business worldwide.
          </Typography>
        </Grid>
        <Grid item md={5}>
          <img src={landing01} alt="landing" width="100%" />
        </Grid>
      </Box>
    </Grid>
  );
};

export default TopLandingSection;
