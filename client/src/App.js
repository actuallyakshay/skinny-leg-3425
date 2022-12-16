import { Navbar } from "./Component/Navbar/Navbar";
import { Router } from "./Component/Router/Router";

import AllTest from "./Pages/AllTest";
import { LabTest } from "./Pages/LabTest";
import { UNavbar } from "./Component/Unavbar/Navbar";
import { UFooter } from "./Component/UFooter";
import Healthpackages from "./Pages/Healthpackages";


function App() {
  return (
    <>
      <Navbar />
      <Router />
      <UNavbar />
      <LabTest />
      <AllTest />
      <Healthpackages />
      <UFooter />
    </>
  );
}

export default App;
