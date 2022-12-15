import { Navbar } from "./Component/Navbar/Navbar";

import Products from "./Component/Products/Products";
import { Router } from "./Component/Router/Router";


function App() {
  return (
    <>
      <Navbar />

      <Products />
      <Router />

    </>
  );
}

export default App;
