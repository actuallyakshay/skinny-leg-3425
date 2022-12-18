import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import Product from "../Component/Products/Products";
import { SinglePage } from "../Pages/SinglePage/SinglePage";
import { SingleProduct } from "../Pages/SinglePage/Components/SingleProduct";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/SinglePage" element={<SinglePage />}>
        <Route path=":id" element={<SingleProduct />} />
      </Route>
    </Routes>
  );
};
