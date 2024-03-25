/* eslint-disable react/prop-types */
import { useState } from "react";
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

  return (
    <Grid container className="relative projects-container">
      <CornerTopLeft
        style={{ position: "absolute", left: "40px", top: "0px" }}
        grad1={projects[choosenIndex].color.grad1}
        grad2={projects[choosenIndex].color.grad2}
      />
      <Grid container sx={{ position: "absolute", top: "60px", px: 8 }}>
        {/* logo icons and proj desc container */}
        <Grid
          item
          md={12}
          sx={{ display: "flex", flexDirection: "column", px: 4 }}
        >
          {/* logo and git and mail container */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img src={letterA} alt="initials" width="5%" />
            <Box sx={{ pr: 5 }}>
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
          <Grid container sx={{ px: 6 }} className="flex-r-h-between-vc">
            {/* tried to use framer motion here */}
            {/* <motion.div
                style={{ width: "100%" }}
                variants={variants}
                initial="hidden"
                animate="visible"
              > */}

            <Grid item md={7}>
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

              <Box sx={{ px: 4, height: "100%" }} className="relative">
                <div
                  className="vertical-divider"
                  style={{
                    backgroundImage: `linear-gradient(180deg, ${projects[choosenIndex].color.grad1} 0%, ${projects[choosenIndex].color.grad2} 100%)`,
                  }}
                ></div>
                <Typography
                  sx={{
                    fontWeight: 300,
                    color: "#ccc",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                >
                  {projects[choosenIndex].desc}
                </Typography>
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

            <Grid item md={4}>
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
          sx={{ display: "flex", justifyContent: "flex-end", px: 4 }}
        >
          <Typography>@2024 1234@gmail.com</Typography>
        </Grid>
      </Grid>
      <CornerBottomRight
        style={{ position: "absolute", right: "40px", bottom: "-2px" }}
        grad1={projects[choosenIndex].color.grad1}
        grad2={projects[choosenIndex].color.grad2}
      />
    </Grid>
  );
};

export default Projects;
