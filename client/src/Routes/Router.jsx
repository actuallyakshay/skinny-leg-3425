import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { SinglePage } from "../Pages/SinglePage/SinglePage";
import { SingleProduct } from "../Pages/SinglePage/Components/SingleProduct";
import Medicine from "../Pages/Medicine/Medicine";
import Products from "../Component/Products/Products";
import OfferPage from "../Pages/Offers/Offer";
import Blog from "../Component/blog/blog";
import Healthpackages from "../Pages/Labtest/Healthpackages";
import AllTest from "../Pages/Labtest/AllTest";
import { LabTest } from "../Pages/Labtest/LabTest";
import { Cart } from "../Pages/Cart/Cart";
import SignupPage from "../Admin/SignupPage";
import LoginPage from "../Admin/LoginPage";
import AdminDashboard from "../Admin/Dashboard";
import FirstPage from "../Admin/FirstPage";
import AllProducts from "../Admin/AllProducts";
import Trash from "../Admin/Trash";
import AllUsers from "../Admin/AllUsers";
import SearchComponent from "../Component/Navbar/SearchComponent";
import PrivateRoute from "./PrivateRoute";
import { Login } from "../Component/Login/Login";

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
      <Route path="/login" element={<Login />} />
      <Route path="/searchedData" element={<SearchComponent />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin/createuser" element={<SignupPage />} />
      <Route path="/admin/login" element={<LoginPage />} />
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <FirstPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/trash"
        element={
          <PrivateRoute>
            <Trash />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
