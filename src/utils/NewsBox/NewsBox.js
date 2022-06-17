import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Divider, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "./NewsBox.css";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 350,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

export default function NewsBox() {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
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
            <div className="icon-text">
               <CalendarMonthIcon />
               <span>11 July 2022</span>
            </div>
            <Typography variant="body1">Caoching will be closed!</Typography>
            <Button
               size="small"
               endIcon={<ArrowForwardIcon />}
               onClick={handleOpen}
            >
               Detail
            </Button>
         </div>
         <Divider />
         <div className="news-item">
            <div className="icon-text">
               <CalendarMonthIcon />
               <span>11 July 2022</span>
            </div>
            <Typography variant="body1">Caoching will be closed!</Typography>
            <Button
               size="small"
               endIcon={<ArrowForwardIcon />}
               onClick={handleOpen}
            >
               Detail
            </Button>
         </div>
         <Divider />

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Typography variant="h6">Text in a modal</Typography>
               <Typography variant="body2">11 July 2022</Typography>
               <Typography mt={1}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
               </Typography>
            </Box>
         </Modal>
      </div>
   );
}
