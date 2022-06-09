import {
   Box,
   Button,
   Grid,
   IconButton,
   TextField,
   Typography,
} from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function ContactUs() {
   return (
      <Box px={5} pb={5}>
         <Typography
            variant="h2"
            color="secondary"
            sx={{ textAlign: "center", marginY: 2 }}
         >
            Contact Us
         </Typography>
         <Grid container>
            <Grid item width={500} p={5}>
               <form>
                  <TextField
                     label="Name"
                     variant="outlined"
                     fullWidth
                     sx={{ marginBottom: 2 }}
                  />
                  <TextField
                     label="Email"
                     variant="outlined"
                     fullWidth
                     sx={{ marginBottom: 2 }}
                  />
                  <TextField
                     label="Phone"
                     variant="outlined"
                     fullWidth
                     sx={{ marginBottom: 2 }}
                  />
                  <TextField
                     label="Message"
                     variant="outlined"
                     fullWidth
                     sx={{ marginBottom: 2 }}
                     multiline
                     rows={3}
                  />
                  <Button variant="contained" sx={{ width: 120 }}>
                     Send Email
                  </Button>
               </form>
            </Grid>

            <Grid item p={5}>
               <div className="icon-with-text">
                  <EmailIcon fontSize="large" />
                  <Typography ml={2}>xyz@gmail.com</Typography>
               </div>

               <div className="icon-with-text">
                  <PhoneIphoneIcon fontSize="large" />
                  <Typography ml={2}>9876543210</Typography>
               </div>

               <div className="icon-with-text">
                  <LocationOnIcon fontSize="large" />
                  <Typography ml={2}>Raja Bazar, Kolkata-4724827</Typography>
               </div>

               <div className="icon-with-text">
                  <IconButton color="success">
                     <WhatsAppIcon fontSize="large" />
                  </IconButton>
                  <IconButton color="info">
                     <FacebookIcon fontSize="large" />
                  </IconButton>
                  <IconButton color="error">
                     <InstagramIcon fontSize="large" />
                  </IconButton>
                  <IconButton color="error">
                     <YouTubeIcon fontSize="large" />
                  </IconButton>
               </div>
            </Grid>
         </Grid>
      </Box>
   );
}
