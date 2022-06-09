import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
   return (
      <Box px={5} textAlign="center">
         <Typography variant="h2" color="secondary" my={2}>
            Login
         </Typography>
         <form style={{ maxWidth: 300, margin: "auto" }}>
            <TextField
               variant="outlined"
               label="Email"
               type="email"
               fullWidth
               required
               sx={{ marginBottom: 2 }}
            />

            <TextField
               variant="outlined"
               label="Password"
               type="password"
               fullWidth
               required
               sx={{ marginBottom: 2 }}
            />

            <Button variant="contained" type="submit">
               Login
            </Button>
         </form>
         <Typography variant="body1" mt={2}>
            Not a user? <Link to="/signup">signup</Link>
         </Typography>
      </Box>
   );
}
