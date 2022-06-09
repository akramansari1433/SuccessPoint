import React from "react";
import { Button, Divider, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function VideosBox() {
   return (
      <div className="box dib">
         <Typography variant="h3" color="inherit">
            Latest <span style={{ color: "#e27d60" }}>Videos</span>
         </Typography>
         <Divider
            sx={{
               width: "30%",
               marginY: 2,
               borderBottomWidth: 5,
               borderBottomColor: "#20b2aa",
            }}
         />
         <div className="video-item">
            <Typography variant="body1">BA(Honors)</Typography>
            <Typography variant="body2">Economics</Typography>
            <Button size="small" endIcon={<YouTubeIcon color="error" />}>
               View on
            </Button>
         </div>
         <Divider />
         <div className="news-item">
            <Typography variant="body1">BA(Honors)</Typography>
            <Typography variant="body2">Economics</Typography>
            <Button size="small" endIcon={<YouTubeIcon color="error" />}>
               View on
            </Button>
         </div>
         <Divider />
      </div>
   );
}
