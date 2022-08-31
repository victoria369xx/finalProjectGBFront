import {
  Container
} from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../Header";
import { Search } from "../Search";

export const MainContainer = () => {
  const currentLocation = useLocation();
  const locationCheck = (location) => {
    if (location.pathname === "/" || location.pathname.includes("/search/")) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
    <Header />
    <Container>
      {locationCheck(currentLocation) ? <Search /> : <></>}

      <Outlet />
     
    </Container>
    </>
  );
};


