import {
   AppBar,
   Divider,
   Drawer,
   IconButton,
   List,
   ListItemButton,
   ListItemText,
   styled,
   Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./logo.jpeg";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
   display: "flex",
   justifyContent: "space-between",
});

export default function MobileNav({ setValue }) {
   const [openDrawer, setOpenDrawer] = useState(false);

   const handleClick = (e) => {
      setOpenDrawer(false);
      setValue(parseInt(e.currentTarget.id));
   };
   return (
      <AppBar position="sticky">
         <StyledToolbar>
            <img src={logo} alt="logo" style={{ width: "2.5rem" }} />
            <Drawer
               open={openDrawer}
               onClose={() => setOpenDrawer(false)}
               anchor="right"
            >
               <List>
                  <ListItemButton
                     component={Link}
                     to="/"
                     id={0}
                     onClick={handleClick}
                  >
                     <ListItemText>Home</ListItemText>
                  </ListItemButton>

                  <ListItemButton
                     component={Link}
                     to="/aboutus"
                     id={1}
                     onClick={handleClick}
                  >
                     <ListItemText>About Us</ListItemText>
                  </ListItemButton>

                  <ListItemButton
                     component={Link}
                     to="/Courses"
                     id={2}
                     onClick={handleClick}
                  >
                     <ListItemText>Courses</ListItemText>
                  </ListItemButton>

                  <ListItemButton
                     component={Link}
                     to="/gallery"
                     id={3}
                     onClick={handleClick}
                  >
                     <ListItemText>Gallery</ListItemText>
                  </ListItemButton>

                  <ListItemButton
                     component={Link}
                     to="/contactus"
                     id={4}
                     onClick={handleClick}
                  >
                     <ListItemText>Contact Us</ListItemText>
                  </ListItemButton>

                  <Divider />

                  <ListItemButton
                     component={Link}
                     to="/login"
                     id={5}
                     onClick={handleClick}
                  >
                     <ListItemText>LogIn/Sign Up</ListItemText>
                  </ListItemButton>
               </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(true)}>
               <MenuIcon />
            </IconButton>
         </StyledToolbar>
      </AppBar>
   );
}
