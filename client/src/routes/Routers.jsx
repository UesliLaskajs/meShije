import Home from "../pages/Home"
import AboutUs from "../pages/Aboutus"
import { Routes, Route } from "react-router-dom"


const Routers = () => {
    return (

        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
    )
}

export default Routers;