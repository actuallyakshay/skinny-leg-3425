import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import Product from "../Component/Products/Products";
import { SinglePage } from "../Pages/SinglePage/SinglePage";
import { SingleProduct } from "../Pages/SinglePage/Components/SingleProduct";
import { LabTest } from "../Pages/LabTest";
import AllTest from "../Pages/AllTest";
import Healthpackages from "../Pages/Healthpackages";
import Medicine from "../Pages/Medicine/Medicine";
import Products from "../Component/Products/Products";
import OfferPage from "../Pages/Offers/Offer";
import Blog from "../Component/blog/blog";
import Cart from "../Component/Addcart/cart";

// const arr = [
//   "ayurvedic",
//   "babycare",
//   "diabetes",
//   "disinfactents",
//   "healthcareDevices",
//   "healthFood",
//   "immunity",
//   "medicine",
//   "mens",
//   "stomach",
//   "skincare",
// ];

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />}></Route>
      <Route path="/SinglePage" element={<SinglePage />}>
        <Route path=":id" element={<SingleProduct />} />
      </Route>
      <Route path="/labtest" element={<LabTest />} />
      <Route path="/offers" element={<OfferPage />} />
      <Route path="all-tests" element={<AllTest />} />
      <Route path="Healthpackages" element={<Healthpackages />} />
      <Route path="/medicine" element={<Medicine />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
