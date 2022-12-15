import { Navbar } from "./Component/Navbar/Navbar";
import { Router } from "./Component/Router/Router";
import {LabTest} from "./Pages/LabTest";
function App() {
  return (
    <>
      <Navbar />
      <Router />
      <LabTest/>
    </>
  );
}

export default App;
