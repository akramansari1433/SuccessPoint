import React from "react";
import {
   Button,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   TextField,
   Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function SignUp() {
   let today = new Date().toISOString().split("T")[0];
   return (
      <Box px={5} pb={5} textAlign="center">
         <Typography variant="h2" color="secondary" my={2}>
            Sign Up
         </Typography>
         <form style={{ maxWidth: 350, margin: "auto" }}>
            <TextField
               variant="outlined"
               label="Name"
               type="text"
               fullWidth
               required
               sx={{ marginBottom: 2 }}
            />
            <TextField
               variant="outlined"
               label="Mobile"
               type="tel"
               fullWidth
               required
               sx={{ marginBottom: 2 }}
            />
            <TextField
               variant="outlined"
               label="Email"
               type="email"
               fullWidth
               required
               sx={{ marginBottom: 2 }}
            />
            <TextField
               label="Date of Birth"
               type="date"
               sx={{ marginBottom: 2 }}
               InputProps={{ inputProps: { max: today } }}
               InputLabelProps={{
                  shrink: true,
               }}
               fullWidth
               required
            />
            <FormControl sx={{ marginBottom: 2 }} fullWidth>
               <InputLabel id="demo-simple-select-label">Gender</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Category"
                  value=""
               >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
               </Select>
            </FormControl>

            <TextField
               variant="outlined"
               label="Address"
               type="text"
               fullWidth
               multiline
               rows={3}
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
            <TextField
               variant="outlined"
               label="Confirm Password"
               type="password"
               fullWidth
               required
               sx={{ marginBottom: 2 }}
            />

            <Button variant="contained" type="submit">
               Register
            </Button>
         </form>
         <Typography variant="body1" mt={2}>
            Already registered? <Link to="/login">Login</Link>
         </Typography>
      </Box>
   );
}
