import { AppBar, Button, styled, Tab, Tabs, Toolbar } from "@mui/material";
import React from "react";
import logo from "./logo.jpeg";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
   display: "flex",
   justifyContent: "space-between",
});

export default function DesktopNav({ value, setValue }) {
   return (
      <>
         <AppBar position="sticky">
            <StyledToolbar>
               <img src={logo} alt="logo" style={{ width: "2.5rem" }} />
               <Tabs
                  textColor="inherit"
                  value={value}
                  indicatorColor="secondary"
                  onChange={(e, value) => setValue(value)}
               >
                  <Tab label="Home" component={Link} to="/" />
                  <Tab label="About Us" component={Link} to="/aboutus" />
                  <Tab label="Courses" component={Link} to="/courses" />
                  <Tab label="Gallery" component={Link} to="/gallery" />
                  <Tab label="Contact Us" component={Link} to="/contactUs" />
               </Tabs>

               <Button color="inherit" component={Link} to="/login">
                  Login/Sign Up
               </Button>
            </StyledToolbar>
         </AppBar>
      </>
   );
}
