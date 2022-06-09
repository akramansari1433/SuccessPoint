import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "../../utils/Carousel/Carousel";
import EventsBox from "../../utils/EventsBox/EventsBox";
import NewsBox from "../../utils/NewsBox/NewsBox";
import VideosBox from "../../utils/VideosBox/VideosBox";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export default function Home() {
   let year = new Date().getFullYear();
   return (
      <div>
         <Carousel />

         <Grid container justifyContent="center" my={5} spacing={4}>
            <Grid item>
               <div
                  className="icon-with-text dib"
                  style={{ backgroundColor: "#20b2aa", width: "300px" }}
               >
                  <SchoolIcon fontSize="large" />
                  <Divider
                     orientation="vertical"
                     flexItem
                     sx={{ marginX: 2 }}
                  ></Divider>
                  <div>
                     <Typography variant="h5" textAlign="center">
                        1000+
                     </Typography>
                     <Typography variant="body2">Enrolled Students</Typography>
                  </div>
               </div>
            </Grid>
            <Grid item>
               <div
                  className="icon-with-text dib"
                  style={{ backgroundColor: "#20b2aa", width: "300px" }}
               >
                  <LibraryBooksIcon fontSize="large" />
                  <Divider
                     orientation="vertical"
                     flexItem
                     sx={{ marginX: 2 }}
                  ></Divider>
                  <div>
                     <Typography variant="h5" textAlign="center">
                        100+
                     </Typography>
                     <Typography variant="body2">Courses Available</Typography>
                  </div>
               </div>
            </Grid>
            <Grid item>
               <div
                  className="icon-with-text dib"
                  style={{ backgroundColor: "#20b2aa", width: "300px" }}
               >
                  <PeopleAltIcon fontSize="large" />
                  <Divider
                     orientation="vertical"
                     flexItem
                     sx={{ marginX: 2 }}
                  ></Divider>
                  <div>
                     <Typography variant="h5" textAlign="center">
                        20+
                     </Typography>
                     <Typography variant="body2"> Best Teachers </Typography>
                  </div>
               </div>
            </Grid>
         </Grid>
         <Grid container my={4} justifyContent="center" spacing={5}>
            <Grid item>
               <NewsBox />
            </Grid>
            <Grid item>
               <EventsBox />
            </Grid>
            <Grid item>
               <VideosBox />
            </Grid>
         </Grid>

         <div style={{ backgroundColor: "#20b2aa" }}>
            <Typography textAlign="center" py={4}>
               Ⓒ{year} - Designed and Developed by Akram Ansari. All rights
               reserved.
            </Typography>
         </div>
      </div>
   );
}
