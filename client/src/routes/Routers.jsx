import Home from "../pages/Home"
import AboutUs from "../pages/Aboutus"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import { Routes, Route } from "react-router-dom"


const Routers = () => {
    return (

        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}

export default Routers;