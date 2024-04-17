import { Box, Button, Grid, Typography } from "@mui/material";
import { Colors, getDev } from "../utils/constants";
import TextInput from "../components/TextInput";
import { useState } from "react";

const ContactUs = () => {
  const [request, setRequest] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setRequest(true);
    const form = e.currentTarget;
    let data = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      other: form.other.value,
    };
    console.log("data", data);
    setRequest(false);
  };

  return (
    <Grid container className="contact-us-container" id="CONTACT">
      <Box
        sx={{
          width: "70%",
        }}
        className="flex-col-hc-vc"
      >
        {/* heading text */}
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          sx={{
            width: "100%",
            textAlign: "left",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h4"
            lg={3}
            sm={6}
            sx={{ fontWeight: 600, letterSpacing: "2px", lineHeight: 1.3 }}
          >
            LET'S TALK ABOUT THE <br /> NEXT BIG THING.
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: Colors.greytext, fontSize: "14px", my: 2 }}
          >
            Fill in the form to contact me or send me email to{" "}
            <span
              style={{
                fontWeight: 600,
                textDecoration: "underline",
                color: "#fff",
              }}
              className="just-hover"
            >
              {getDev == 50
                ? "  rupamishraa2000@gmail.com"
                : "avinashranga8@gmail.com"}
            </span>
          </Typography>
        </Grid>
        <Box
          component="form"
          id="contact"
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
        >
          <Grid container>
            <Grid item md={5.5} sm={12} xs={12} sx={{ mx: 2 }}>
              <TextInput label="Name" id="name" />
            </Grid>
            <Grid item md={5.5} sm={12} xs={12} sx={{ mx: 2 }}>
              <TextInput label="Email" id="email" />
            </Grid>
            <Grid item md={5.5} sm={12} xs={12} sx={{ mx: 2 }}>
              <TextInput label="Company" id="company" />
            </Grid>
            <Grid item md={5.5} sm={12} xs={12} sx={{ mx: 2 }}>
              <TextInput label="Other" id="other" />
            </Grid>
          </Grid>
          {/* button */}
          <Grid item md={5.5} sm={12} xs={12} sx={{ mx: 2 }}>
            <Button
              type="submit"
              from="contact"
              disabled={request}
              variant="contained"
              sx={{
                width: "100%",
                borderRadius: "32px",
                color: Colors.black,
                backgroundColor: Colors.grey400,
                fontSize: "10px",
                fontWeight: "900",
                letterSpacing: "1px",
              }}
            >
              GET IN TOUCH
            </Button>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default ContactUs;
