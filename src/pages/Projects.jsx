import { Grid, Typography } from "@mui/material";
import CornerTopLeft from "../assets/svg/CornerTopLeft";
// import { ReactComponent as CornerTopLeft } from "../assets/svg/corner-top-left.svg";
const Projects = () => {
  return (
    <Grid container className="relative" sx={{ minHeight: "700px" }}>
      <CornerTopLeft
        style={{ position: "absolute", left: "40px", top: "0px" }}
      />
      <Grid container sx={{ position: "absolute", top: "80px", px: 8 }}>
        <Grid item md={12} className="flex-r-hsb-vc" sx={{ px: 4 }}>
          <Typography>Logo</Typography>
          <Typography>mail github etc</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
