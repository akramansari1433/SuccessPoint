import {
   Avatar,
   Box,
   Card,
   CardContent,
   CardMedia,
   Divider,
   Grid,
   Typography,
} from "@mui/material";
import React from "react";

export default function AboutUs() {
   return (
      <Box px={5} pb={5}>
         <Typography
            variant="h2"
            color="secondary"
            sx={{ textAlign: "center", marginY: 2 }}
         >
            About Us
         </Typography>

         <Grid container>
            <Grid item xs={12} md={8} sx={{ marginY: "auto" }}>
               <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
               </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "center", marginY: 2 }}>
               <Avatar
                  alt="Khurshid Alam"
                  src="/images/members/khurshid.png"
                  sx={{ width: 200, height: 200, marginX: "auto" }}
               />
               <Typography variant="h5">Khurshid Alam</Typography>
               <Typography variant="body1">( Founder )</Typography>
            </Grid>
         </Grid>

         <Divider sx={{ width: "75%", marginX: "auto", marginY: 3 }} />

         <Typography variant="body2" textAlign="center" color="primary" mt={3}>
            * * OUR PROFESSIONAL * *
         </Typography>
         <Typography variant="h4" color="inherit" textAlign="center" mb={3}>
            Genius Courses Teachers.
         </Typography>

         <Grid container spacing={2} justifyContent="center">
            <Grid item>
               <Card sx={{ maxWidth: 250 }}>
                  <CardMedia
                     component="img"
                     height="140"
                     image="/images/members/tutor.png"
                     alt="tutor"
                  />
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        Saquib Iqbal
                     </Typography>
                     <Typography variant="h6" color="text.secondary">
                        M.Com | B.Ed
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        15 year's teaching experience in Mathematics and Costing
                     </Typography>
                  </CardContent>
               </Card>
            </Grid>
            <Grid item>
               <Card sx={{ maxWidth: 250 }}>
                  <CardMedia
                     component="img"
                     height="140"
                     image="/images/members/tutor.png"
                     alt="tutor"
                  />
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        Saquib Iqbal
                     </Typography>
                     <Typography variant="h6" color="text.secondary">
                        M.Com | B.Ed
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        15 year's teaching experience in Mathematics and Costing
                     </Typography>
                  </CardContent>
               </Card>
            </Grid>
            <Grid item>
               <Card sx={{ maxWidth: 250 }}>
                  <CardMedia
                     component="img"
                     height="140"
                     image="/images/members/tutor.png"
                     alt="tutor"
                  />
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        Saquib Iqbal
                     </Typography>
                     <Typography variant="h6" color="text.secondary">
                        M.Com | B.Ed
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        15 year's teaching experience in Mathematics and Costing
                     </Typography>
                  </CardContent>
               </Card>
            </Grid>
            <Grid item>
               <Card sx={{ maxWidth: 250 }}>
                  <CardMedia
                     component="img"
                     height="140"
                     image="/images/members/tutor.png"
                     alt="tutor"
                  />
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        Saquib Iqbal
                     </Typography>
                     <Typography variant="h6" color="text.secondary">
                        M.Com | B.Ed
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        15 year's teaching experience in Mathematics and Costing
                     </Typography>
                  </CardContent>
               </Card>
            </Grid>
         </Grid>
      </Box>
   );
}
