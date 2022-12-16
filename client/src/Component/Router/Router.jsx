import { Route, Routes } from "react-router-dom";
import { Home } from "../../Pages/Home/Home";
import Product from "../Products/Products";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />}></Route>
    </Routes>
  );
};
