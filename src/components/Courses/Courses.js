import {
   Box,
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Grid,
   Typography,
} from "@mui/material";
import React from "react";

export default function Courses() {
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
      </Box>
   );
}
