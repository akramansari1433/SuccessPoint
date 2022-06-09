import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Divider, Typography } from "@mui/material";
import "./EventsBox.css";

export default function EventsBox() {
   return (
      <div className="box dib">
         <Typography variant="h3" color="inherit">
            Latest <span style={{ color: "#e27d60" }}>Events</span>
         </Typography>
         <Divider
            sx={{
               width: "30%",
               marginY: 2,
               borderBottomWidth: 5,
               borderBottomColor: "#20b2aa",
            }}
         />
         <div className="event-item">
            <div className="dib">
               <Typography variant="h4" textAlign="center">
                  15
               </Typography>
               <span>Aug 2022</span>
            </div>
            <div className="event-body">
               <Typography variant="body1">Unit Test B.Com</Typography>
               <Button size="small" endIcon={<ArrowForwardIcon />}>
                  Event Details
               </Button>
            </div>
         </div>
         <Divider />
         <div className="event-item">
            <div className="dib">
               <Typography variant="h4" textAlign="center">
                  15
               </Typography>
               <span>Aug 2022</span>
            </div>
            <div className="event-body">
               <Typography variant="body1">Unit Test B.Com</Typography>
               <Button size="small" endIcon={<ArrowForwardIcon />}>
                  Event Details
               </Button>
            </div>
         </div>
         <Divider />
      </div>
   );
}
