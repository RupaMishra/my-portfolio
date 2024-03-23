import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const HomeLayout = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default HomeLayout;
