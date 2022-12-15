import {LabTest} from "./Pages/LabTest"

import Products from "./Component/Products/Products";
import { Router } from "./Component/Router/Router";


function App() {
  return (
    <>
     

      <Navbar />
      <LabTest/>
      <Products />  
      <Router />

    </>
  );
}

export default App;
