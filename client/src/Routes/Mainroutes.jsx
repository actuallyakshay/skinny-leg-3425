import React from "react";
import { Routes, Route } from "react-router-dom";





import AllTest from "../Pages/AllTest";


import {LabTest} from "../Pages/LabTest";
import { UNavbar } from "../Component/Unavbar/Navbar";
import {UFooter} from "../Component/UFooter";
import Healthpackages from "../Pages/Healthpackages";


const Mainroutes = () => {
  return (
    <div>
       <UNavbar /> 
      <Routes>
        
        <Route path="/labtest" element={<LabTest />} />
        <Route path="/all-tests" element={<AllTest />} />
        <Route path="/Healthpackages" element={<Healthpackages />} />
      </Routes>
      <UFooter />
    </div>  
  );
};

export default Mainroutes;
