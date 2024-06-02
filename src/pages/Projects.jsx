/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CornerTopLeft from "../assets/svg/CornerTopLeft";
import CornerBottomRight from "../assets/svg/CornerBottomRight";
import letterA from "../assets/images/letter-a.png";
import { Icon } from "@iconify/react";
import { Colors, projects } from "../utils/constants";
import SmallTopCorner from "../assets/svg/SmallTopCorner";
// framer motion
// import { motion } from "framer-motion";

// const variants = {
//   hidden: { x: "-50%" },
//   visible: {
//     x: 0,

//     transistion: {
//       type: "sping",
//       stiffness: 120,
//     },
//   },
// };

const Projects = () => {
  const [choosenIndex, setchoosenIndex] = useState(0);

  useEffect(() => {
    var tempElem = document.getElementById("dessc");
    tempElem.innerHTML = projects[choosenIndex].desc;
  }, [choosenIndex]);

  return (
    <Grid container className="relative projects-container" id="PROJECTS">
      <CornerTopLeft
        style={{
          position: "absolute",
          left: { lg: "40px", md: "40px", xs: "0px" },
          top: "0px",
        }}
        grad1={projects[choosenIndex].color.grad1}
        grad2={projects[choosenIndex].color.grad2}
      />
      <Grid container sx={{ my: 10, px: { lg: 8, md: 8, xs: 4 } }}>
        {/* logo icons and proj desc container */}
        <Grid
          item
          md={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            px: { lg: 4, md: 4, xs: 0 },
          }}
        >
          {/* logo and git and mail container */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img src={letterA} alt="initials" width="40px" />
            <Box sx={{ pr: { lg: 5, xs: 0 } }}>
              <Icon
                icon="cib:gmail"
                style={{
                  fontSize: "30px",
                  color: Colors.seven,
                  margin: "0 18px",
                }}
                className="icons"
              />
              <Icon
                icon="bi:github"
                style={{
                  fontSize: "30px",
                  color: Colors.seven,
                  margin: "0 18px",
                }}
                className="icons"
              />
            </Box>
          </Box>
          {/* projects and description  container*/}
          <Grid
            container
            sx={{ px: { lg: 6, xs: 0 } }}
            className="flex-r-h-between-vc"
          >
            {/* this is only for small screen top tabs for proj */}
            <Grid
              item
              lg={12}
              md={12}
              xs={12}
              sm={12}
              sx={{
                mt: 2,
                ml: 1,
                zIndex: "10",
                display: {
                  lg: "none",
                  md: "none",
                  sm: "flex",
                  xs: "flex",
                  flexWrap: "wrap",
                },
              }}
            >
              {projects.map((project, index) => {
                return (
                  <Box
                    key={index}
                    sx={{ mx: 1, my: 1 }}
                    onClick={() => {
                      setchoosenIndex(index);
                    }}
                  >
                    <a
                      //   href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-names"
                    >
                      <span
                        style={{
                          borderImage: `linear-gradient(90deg, ${projects[choosenIndex].color.grad1} 0%, ${projects[choosenIndex].color.grad2} 100%)`,
                        }}
                      >
                        {project?.title}
                      </span>
                    </a>
                  </Box>
                );
              })}
            </Grid>
            {/* this is desc of proj */}
            <Grid item md={7} xs={12} sx={{ ml: { xs: 2 } }}>
              <Typography
                sx={{
                  fontSize: "35px",
                  fontWeight: 300,
                  mt: "30px",
                  mb: "20px",
                }}
              >
                {projects[choosenIndex].title}
              </Typography>

              <Box
                sx={{ px: { lg: 4, md: 4, xs: 2 }, height: "100%" }}
                className="relative"
              >
                <div
                  className="vertical-divider"
                  style={{
                    backgroundImage: `linear-gradient(180deg, ${projects[choosenIndex].color.grad1} 0%, ${projects[choosenIndex].color.grad2} 100%)`,
                  }}
                ></div>
                <Typography
                  id="dessc"
                  sx={{
                    fontWeight: 300,
                    color: "#ccc",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                ></Typography>
                {/* view site */}
                <div style={{ marginTop: "20px" }}>
                  <a className="project-names">
                    <span
                      style={{
                        borderImage: `linear-gradient(90deg, ${projects[choosenIndex].color.grad1} 0%, ${projects[choosenIndex].color.grad2} 100%)`,
                        borderBottom: "3.5px solid transparent",
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                    >
                      View Site
                    </span>
                  </a>
                </div>
              </Box>
            </Grid>
            {/* </motion.div> */}

            <Grid
              item
              md={4}
              xs={12}
              sx={{
                display: { lg: "block", md: "block", sm: "none", xs: "none" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: 300,
                  mt: "20px",
                  mb: "30px",
                }}
              >
                Projects
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: 4,
                  position: "relative",
                }}
              >
                <SmallTopCorner
                  style={{ position: "absolute", top: "0px", left: "0px" }}
                  grad1={projects[choosenIndex].color.grad1}
                  grad2={projects[choosenIndex].color.grad2}
                />
                {projects.map((project, index) => {
                  return (
                    <a
                      key={index}
                      //   href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-names"
                      onClick={() => {
                        setchoosenIndex(index);
                      }}
                    >
                      <span
                        style={{
                          borderImage: `linear-gradient(90deg, ${projects[choosenIndex].color.grad1} 0%, ${projects[choosenIndex].color.grad2} 100%)`,
                        }}
                      >
                        {project?.title}
                      </span>
                    </a>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "flex-end", px: 4, mt: 1 }}
        >
          <Typography>@2024 avinashranga8@gmail.com</Typography>
        </Grid>
      </Grid>
      <CornerBottomRight
        style={{
          position: "absolute",
          right: { lg: "40px", md: "40px", xs: "0px" },
          bottom: "-2px",
        }}
        grad1={projects[choosenIndex].color.grad1}
        grad2={projects[choosenIndex].color.grad2}
      />
    </Grid>
  );
};

export default Projects;
