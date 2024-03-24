import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const Work = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: 8,
      }}
    >
      <Grid
        lg={12}
        sm={6}
        container
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item lg={8} sm={12}>
          <Typography variant="h4" textAlign={"center"}>
            My Work
          </Typography>
          <Typography
            variant="caption"
            fontWeight={10}
            color={"#D3D3D3"}
            textAlign={"center"}
          >
            Check my comercial and non comercial projects. If you have any
            question feel free to ask me for more information at
            rupamishraa2000@gmail.com
          </Typography>
        </Grid>
        <Grid item lg={12} sm={12}>
          <Grid
            container
            lg={12}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={8}
          >
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Work;
