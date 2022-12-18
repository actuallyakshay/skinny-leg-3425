import { Router } from "react-router-dom";
import { Navbar } from "./Component/Navbar/Navbar";
import {UFooter} from "./Component/UFooter"

function App() {
  return (
    <>
        <Navbar /> 
      <Router />
      <UFooter /> 
     
    </>
  );
}

export default App;
