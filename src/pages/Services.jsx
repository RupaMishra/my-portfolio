import { Box, Grid, Typography } from "@mui/material";
import { Colors } from "../utils/constants";
import { Icon } from "@iconify/react";
const EachService = () => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon
        icon="charm:north-star"
        style={{ fontSize: "30px", marginRight: 6 }}
      />
      <Typography className="bungee-outline">PRODUCT DESIGN</Typography>
    </Box>
  );
};

const Services = () => {
  return (
    <section id="SERVICE">
      <Grid container className="services-root-container" textAlign={"center"}>
        <Box
          sx={{
            width: { lg: "60%", md: "60%", sm: "80%", xs: "80%" },
            py: { lg: 5, md: 5, sm: 5, xs: 5 },
          }}
          className="flex-col-hc-vc"
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: Colors.blue,
              fontWeight: 600,
              my: 1,
            }}
          >
            Our Services
          </Typography>
          <Typography sx={{ fontSize: "40px", fontWeight: 600, my: 1 }}>
            Services I provide
          </Typography>

          <EachService />
          <div className="divider"></div>
          <EachService />
          <div className="divider"></div>
          <EachService />
          <div className="divider"></div>
          <EachService />
          <div className="divider"></div>
        </Box>
      </Grid>
    </section>
  );
};

export default Services;
