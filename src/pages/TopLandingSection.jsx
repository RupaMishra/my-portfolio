/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from "@mui/material";
import { Colors, getDev } from "../utils/constants";
// import bg from "../assets/images/bg.png";
import useResponsive from "../hooks/useResponsive";

const TopLandingSection = () => {
  const isBig = useResponsive("up", "sm");

  console.log("getDev", getDev);
  return (
    <Grid
      id="HOME"
      container
      lg={12}
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      // sx={{ backgroundImage: `url(${bg})`, height: "80vh" }}
    >
      {getDev == 7 ? (
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
          mt={4}
        >
          <Typography
            sx={{
              fontSize: isBig ? "70px" : "50px",
              lineHeight: "85px",
              fontWeight: 550,
            }}
            textAlign={"center"}
          >
            HELLO!{" "}
            <span className="light-blue-font" style={{ marginBottom: "20px" }}>
              I'M
            </span>{" "}
            A <br />
            <span className="light-blue-font">SOFTWARE DEVELOPER</span>
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: Colors.grey500, width: "70%" }}
            textAlign={"center"}
          >
            With expertise in front-end and back-end development, proficient in
            technologies like <br /> Javascript | React.js | Next.js | React
            Native | Redux | Context API | Hooks | Material UI | Tailwind | HTML
            | CSS | Node | Express , and databases like MongoDB
          </Typography>
        </Grid>
      ) : (
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
          mt={4}
        >
          <Typography
            sx={{
              fontSize: isBig ? "70px" : "50px",
              lineHeight: "85px",
              fontWeight: 550,
            }}
            textAlign={"center"}
          >
            HELLO!{" "}
            <span className="light-blue-font" style={{ marginBottom: "20px" }}>
              I'M
            </span>{" "}
            A <br />
            <span className="light-blue-font"> SOFTWARE DEVELOPER</span>
          </Typography>
          <Typography
            sx={{ fontSize: "15px", color: Colors.greytext, width: "70%" }}
            textAlign={"center"}
          >
            With expertise in front-end and back-end development, proficient in
            technologies like <br /> Javascript | React.js | Next.js | React
            Native | Redux | Context API | Hooks | Material UI | Tailwind | HTML
            | CSS | Node | Express , and databases like MongoDB
          </Typography>
        </Grid>
      )}
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
