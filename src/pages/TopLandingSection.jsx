/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from "@mui/material";
import { Colors } from "../utils/constants";
import bg from "../assets/images/bg.png";
import useResponsive from "../hooks/useResponsive";

const TopLandingSection = () => {
  const isBig = useResponsive("up", "sm");
  return (
    <Grid
      container
      lg={12}
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      // sx={{ backgroundImage: `url(${bg})`, height: "80vh" }}
    >
      <Grid
        item
        lg={5}
        md={6}
        sm={12}
        display="flex"
        justifyContent="center"
        alignItems={"center"}
        flexDirection={"column"}
        my={12}
      >
        <Typography
          sx={{
            fontSize: isBig ? "70px" : "50px",
            lineHeight: "75px",
            fontWeight: 550,
          }}
          textAlign={"center"}
        >
          HELLO! <span className="light-blue-font">I'M</span> A <br />
          WEB DESIGNER+ <span className="light-blue-font">DEVELOPER</span>
        </Typography>
        <Typography
          sx={{ fontSize: "14px", color: Colors.greytext, width: "70%" }}
          textAlign={"center"}
        >
          Beautiful design has the power to capitivate audiences and drive
          business growth. Specializing in creating stunning designs that
          transfom business worldwide.
        </Typography>
      </Grid>
      {/* <Grid
        item
        lg={4}
        md={6}
        display="flex"
        justifyContent="center"
        alignItems={"center"}
        flexDirection={"column"}
      >
        <img src={landing01} alt="landing" width="80%" />
      </Grid> */}
    </Grid>
  );
};

export default TopLandingSection;
