import { Navbar } from "./Component/Navbar/Navbar";
import { Router } from "./Component/Router/Router";
import AllTest from "./Pages/AllTest";
import { LabTest } from "./Pages/LabTest";
import { UNavbar } from "./Component/Unavbar/Navbar";
import { UFooter } from "./Component/UFooter";
import Healthpackages from "./Pages/Healthpackages";
import Offers from "./Pages/Offer"

function App() {
  return (
    <>
      
      {/* <Navbar />
      <Router />
      <UNavbar />
      <LabTest />
      <AllTest />
      <Healthpackages />
      <UFooter /> */}
      <Offers/>
      {/* <AllTest /> */}
    </>
  );
}

export default App;
