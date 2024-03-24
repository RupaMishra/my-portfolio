import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const ContactUs = () => {
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
      <Grid lg={6} sm={6} container>
        <Grid item lg={8} sm={12}>
          <Typography variant="h4" lg={3} sm={6}>
            LET'S TALK ABOUT THE NEXT BIG THING.
          </Typography>
          <Typography
            variant="caption"
            lg={3}
            sm={6}
            fontWeight={10}
            color={"#D3D3D3"}
          >
            Fill in the form to contact me or send me email to
            rupa@mishraa2000@gmail.com
          </Typography>
        </Grid>
      </Grid>
      <Box lg={12} sx={{ background: "red" }}>
        heloooooo
      </Box>
    </Box>
  );
};

export default ContactUs;
