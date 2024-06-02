/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from "@mui/material";
import { Colors, SERVICES } from "../utils/constants";
import { Icon } from "@iconify/react";
const EachService = ({ eachData }) => {
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
        icon={eachData.icon}
        style={{ fontSize: "24px", marginRight: "18px" }}
      />
      <Typography className="bungee-outline">{eachData.label}</Typography>
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
              fontSize: "24px",
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

          {SERVICES.map((service) => {
            return (
              <>
                <EachService eachData={service} />
                <div className="divider"></div>
              </>
            );
          })}
        </Box>
      </Grid>
    </section>
  );
};

export default Services;
