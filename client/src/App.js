import { Box } from "@chakra-ui/layout";
import { Navbar } from "./Component/Navbar/Navbar";
import { UFooter } from "./Component/UFooter";
import { Router } from "./Routes/Router";

function App() {
  return (
    <>
        <Navbar /> 
      <Router />
      {/* <UFooter /> */}
    </>
  );
}

export default App;
