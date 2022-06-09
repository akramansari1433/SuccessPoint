import { Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "../../utils/Carousel/Carousel";
import EventsBox from "../../utils/EventsBox/EventsBox";
import NewsBox from "../../utils/NewsBox/NewsBox";
import VideosBox from "../../utils/VideosBox/VideosBox";
import InfoBox from "../../utils/InfoBox/InfoBox";

export default function Home() {
   let year = new Date().getFullYear();
   return (
      <div>
         <Carousel />
         <InfoBox />
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
