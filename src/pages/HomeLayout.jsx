import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import Footer from "./Footer";

const HomeLayout = () => {
  return (
    <Box>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </Box>
  );
};

export default HomeLayout;
