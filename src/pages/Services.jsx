import { Box, Grid, Typography } from "@mui/material";
import { Colors } from "../utils/constants";
import { Icon } from "@iconify/react";
const EachService = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <div>
        <Icon icon="charm:north-star" style={{ fontSize: "30px" }} />
        <span className="bungee-outline">PRODUCT DESIGN</span>
      </div>
      <div className="divider"></div>
    </Box>
  );
};

const Services = () => {
  return (
    <Grid container className="services-root-container">
      <Box sx={{ width: "60%", py: 5 }} className="flex-col-hc-vc">
        <Typography
          sx={{
            fontSize: "14px",
            color: Colors.blue,
            fontWeight: 600,
            my: 1,
          }}
        >
          Services
        </Typography>
        <Typography sx={{ fontSize: "40px", fontWeight: 600, my: 1 }}>
          Services I provide
        </Typography>

        <EachService />
        <EachService />
        <EachService />
        <EachService />
      </Box>
    </Grid>
  );
};

export default Services;
