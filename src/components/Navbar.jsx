import { Box, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { NAV } from "../utils/constants";
import useResponsive from "../hooks/useResponsive";
const Navbar = () => {
  const isBig = useResponsive("up", "sm");
  return (
    <Grid container className="navbar flex-r-hc">
      <Box
        sx={{ display: "flex", width: "75%", justifyContent: "space-between" }}
      >
        {/* <Grid item md={5} className="flex-r-hs-vc"> */}
        <Grid item md={5}>
          <NavLink to="/" className="flex-r-vc">
            <img src={logo} alt="Logo" className="nav-links-logo" />
          </NavLink>
        </Grid>
        <Grid
          item
          md={7}
          // sx={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "flex-end",
          // }}
        >
          <Box
            sx={{
              display: isBig ? "flex" : "none",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            {NAV.map((nav, index) => {
              const { label } = nav;
              return (
                <NavLink key={index} className="nav-links">
                  {label}
                </NavLink>
              );
            })}
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Navbar;
