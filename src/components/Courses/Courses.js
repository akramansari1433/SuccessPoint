import {
   Box,
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Grid,
   Modal,
   Typography,
} from "@mui/material";
import React from "react";

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

export default function Courses() {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   return (
      <Box px={5}>
         <Typography
            variant="h2"
            color="secondary"
            sx={{ textAlign: "center", marginY: 2 }}
         >
            Courses
         </Typography>

         <Grid container justifyContent="center" spacing={3}>
            <Grid item>
               <Card sx={{ maxWidth: 300 }}>
                  <CardMedia sx={{ bgcolor: "#20b2aa", textAlign: "center" }}>
                     <Typography variant="h3" pt={5}>
                        B.Com
                     </Typography>
                     <Typography variant="body1" pb={5}>
                        (Hons/General)
                     </Typography>
                  </CardMedia>
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        Lizard
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                     </Typography>
                  </CardContent>
                  <CardActions>
                     <Button
                        size="small"
                        color="secondary"
                        onClick={handleOpen}
                     >
                        Course Detail
                     </Button>
                     <Button size="small" color="secondary">
                        Enroll
                     </Button>
                  </CardActions>
               </Card>
            </Grid>
            <Grid item>
               <Card sx={{ maxWidth: 300 }}>
                  <CardMedia sx={{ bgcolor: "#20b2aa", textAlign: "center" }}>
                     <Typography variant="h3" pt={5}>
                        B.Com
                     </Typography>
                     <Typography variant="body1" pb={5}>
                        (Hons/General)
                     </Typography>
                  </CardMedia>
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        Lizard
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                     </Typography>
                  </CardContent>
                  <CardActions>
                     <Button size="small" color="secondary">
                        Course Detail
                     </Button>
                     <Button size="small" color="secondary">
                        Enroll
                     </Button>
                  </CardActions>
               </Card>
            </Grid>
            <Grid item>
               <Card sx={{ maxWidth: 300 }}>
                  <CardMedia sx={{ bgcolor: "#20b2aa", textAlign: "center" }}>
                     <Typography variant="h3" pt={5}>
                        B.Com
                     </Typography>
                     <Typography variant="body1" pb={5}>
                        (Hons/General)
                     </Typography>
                  </CardMedia>
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        Lizard
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                     </Typography>
                  </CardContent>
                  <CardActions>
                     <Button size="small" color="secondary">
                        Course Detail
                     </Button>
                     <Button size="small" color="secondary">
                        Enroll
                     </Button>
                  </CardActions>
               </Card>
            </Grid>
            <Grid item>
               <Card sx={{ maxWidth: 300 }}>
                  <CardMedia sx={{ bgcolor: "#20b2aa", textAlign: "center" }}>
                     <Typography variant="h3" pt={5}>
                        B.Com
                     </Typography>
                     <Typography variant="body1" pb={5}>
                        (Hons/General)
                     </Typography>
                  </CardMedia>
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        Lizard
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                     </Typography>
                  </CardContent>
                  <CardActions>
                     <Button size="small" color="secondary">
                        Course Detail
                     </Button>
                     <Button size="small" color="secondary">
                        Enroll
                     </Button>
                  </CardActions>
               </Card>
            </Grid>
         </Grid>

         <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
               <Typography variant="h6" mb={1}>
                  Heading
               </Typography>
               <Typography variant="body1" mb={1}>
                  <span style={{ fontWeight: "bold" }}>For :</span> Students
               </Typography>
               <Typography variant="body1" mb={1}>
                  <span style={{ fontWeight: "bold" }}>Type :</span> Foundation
               </Typography>
               <Typography variant="body1" mb={1}>
                  <span style={{ fontWeight: "bold" }}>Subject :</span>{" "}
                  Economics
               </Typography>
               <Typography variant="body1" mb={1}>
                  <span style={{ fontWeight: "bold" }}>Frequency :</span> Per
                  Week
               </Typography>
               <Typography variant="body1" mb={1}>
                  <span style={{ fontWeight: "bold" }}>Start Date :</span> Per
                  Week
               </Typography>
               <Typography variant="body1" mb={1}>
                  <span style={{ fontWeight: "bold" }}>Teachers :</span>{" "}
                  Teacher1 , Teacher2
               </Typography>
               <Typography my={1}>
                  Description: Duis mollis, est non commodo luctus, nisi erat
                  porttitor ligula.
               </Typography>
               <Button variant="outlined" sx={{ marginTop: 1 }}>
                  Enroll
               </Button>
            </Box>
         </Modal>
      </Box>
   );
}
