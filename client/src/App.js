import { Navbar } from "./Component/Navbar/Navbar";
import { Router } from "./Component/Router/Router";
import {LabTest} from "./Pages/LabTest";
import { UNavbar } from "./Component/Unavbar/Navbar";
import {UFooter} from "./Component/UFooter";
function App() {
  return (
    <>

       

      <Navbar />
      <Router />
      <UNavbar/>
      <LabTest/>
      <UFooter/>
    </>
  );
}

export default App;
