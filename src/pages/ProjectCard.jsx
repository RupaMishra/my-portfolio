import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import project1 from "../assets/projects/project1.png";

const ProjectCard = () => {
  return (
    <Grid
      item
      lg={4}
      sm={8}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      px={8}
      py={2}
    >
      <img
        alt="project"
        src={project1}
        width={"100%"}
        style={{ borderRadius: 12 }}
      />
      <Typography alignSelf={"start"} marginTop={1}>
        IMPSGuru App
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        my={1}
      >
        <Typography
          sx={{
            background: "#f0f0f0",
            padding: 1,
            margin: 0.5,
            borderRadius: 8,
            color: "black",
            fontSize: 8,
            fontWeight: 1000,
            flex: 1,
            textAlign: "center",
          }}
        >
          JavaScript
        </Typography>
        <Typography
          sx={{
            background: "#f0f0f0",
            padding: 1,
            borderRadius: 8,
            margin: 0.5,
            color: "black",
            fontSize: 8,
            fontWeight: 1000,
            flex: 1,
            textAlign: "center",
          }}
        >
          JavaScript
        </Typography>
        <Typography
          sx={{
            background: "#f0f0f0",
            padding: 1,
            borderRadius: 8,
            color: "black",
            margin: 0.5,
            fontSize: 8,
            fontWeight: 1000,
            flex: 1,
            textAlign: "center",
          }}
        >
          JavaScript
        </Typography>
        <Typography
          sx={{
            background: "#f0f0f0",
            padding: 1,
            borderRadius: 8,
            color: "black",
            margin: 0.5,
            fontSize: 8,
            fontWeight: 1000,
            textAlign: "center",
          }}
        >
          +2
        </Typography>
      </Box>
      <Typography fontSize={12} fontWeight={100}>
        IMPS guru is instrumental in providing opportunity to small and medium
        Retailers, Agents and Distributors to become a part of Digital India
        Revolution and earn handsomely. This APP empowers young entrepreneurs to
        establish themselves as self-reliant FinTech. IMPS guru offers multiple
        sources of earning to each of its associate partners.
      </Typography>
    </Grid>
  );
};

export default ProjectCard;
