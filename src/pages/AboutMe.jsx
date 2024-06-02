/* eslint-disable no-unused-vars */
import { Box, Button, Grid, Typography } from "@mui/material";
import { Colors } from "../utils/constants";
import { useState } from "react";
// import useResponsive from "../hooks/useResponsive";
// import landing01 from "../assets/images/01-landing.webp";

const AboutMe = () => {
  const [url, setUrl] = useState(
    "https://drive.google.com/file/d/111FR3dkuXTjaVnsHE_d6z4_2tD1yY1so/preview"
  );
  // const isBig = useResponsive("up", "sm");
  return (
    <Grid
      id="ABOUT"
      container
      lg={12}
      display="flex"
      justifyContent="center"
      alignItems={"flex-start"}
      sx={{ backgroundColor: "black" }}

      // sx={{ backgroundImage: `url(${bg})`, height: "80vh" }}
    >
      <Grid
        item
        lg={6}
        md={6}
        display="flex"
        justifyContent="center"
        alignItems={"center"}
        flexDirection={"column"}
        sx={{ my: 4 }}
      >
        <iframe src={url} width="540" height="610" allow="autoplay"></iframe>
      </Grid>

      <Grid
        item
        lg={6}
        md={6}
        sm={12}
        my={12}
        mt={4}
        sx={{ position: "relative" }}
      >
        <h1 className="about-me-big">About</h1>
        <h2 className="about-me-small" style={{ marginBottom: "2.5rem" }}>
          About Me
        </h2>

        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: "1.6",
            color: Colors.grey800,
            fontWeight: 400,
            width: "95%",
            mt: 8,
          }}
          textAlign={"left"}
        >
          Experienced software developer with over 2 years of expertise in
          creating responsive websites and APIs. Skilled in developing,
          designing, and testing web portals and backend solutions. Dedicated to
          using the latest technologies for efficient, high-quality development
          and passionate about delivering user-friendly experiences.
        </Typography>
        <ul className="about-me-info">
          <li className="list-items">
            <span className="list-label">Name:</span>
            <span className="list-info">Avinash Ranga</span>
          </li>
          <li className="list-items">
            <span className="list-label">Email:</span>
            <span className="list-info">avinashranga8@gmail.com</span>
          </li>
          <li className="list-items">
            <span className="list-label">Mobile:</span>
            <span className="list-info">+91 9971074104</span>
          </li>
        </ul>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "50px",
              backgroundColor: Colors.blue,
              py: 2.4,
              px: 2.5,
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "1.5px",
            }}
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/180HAHPduLKKAcoEKa170_mzZOCfg6IZ0?usp=drive_link",
                "_blank"
              )
            }
          >
            DOWNLOAD CV
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
