import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Divider, Typography } from "@mui/material";
import "./NewsBox.css";

export default function NewsBox() {
   return (
      <div className="box dib">
         <Typography variant="h3" color="inherit">
            Latest <span style={{ color: "#e27d60" }}>News</span>
         </Typography>
         <Divider
            sx={{
               width: "30%",
               marginY: 2,
               borderBottomWidth: 5,
               borderBottomColor: "#20b2aa",
            }}
         />
         <div className="news-item">
            <div className="icon-with-text">
               <CalendarMonthIcon />
               <span>11 July 2022</span>
            </div>
            <Typography variant="body1">Caoching will be closed!</Typography>
            <Button size="small" endIcon={<ArrowForwardIcon />}>
               Detail
            </Button>
         </div>
         <Divider />
         <div className="news-item">
            <div className="icon-with-text">
               <CalendarMonthIcon />
               <span>11 July 2022</span>
            </div>
            <Typography variant="body1">Caoching will be closed!</Typography>
            <Button size="small" endIcon={<ArrowForwardIcon />}>
               Detail
            </Button>
         </div>
         <Divider />
      </div>
   );
}
