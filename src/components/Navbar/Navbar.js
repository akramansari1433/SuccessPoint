import { useTheme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
   const [value, setValue] = useState(0);

   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("md"));

   return (
      <>
         {matches ? (
            <MobileNav setValue={setValue} />
         ) : (
            <DesktopNav value={value} setValue={setValue} />
         )}
      </>
   );
}
