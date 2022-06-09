import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Courses from "./components/Courses/Courses";
import Gallery from "./components/Gallery/Gallery";
import ContactUs from "./components/ContactUs/ContactUs";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";

function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/courses" element={<Courses />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
