import { Route, Routes } from "react-router-dom";
import { Home } from "../../Pages/Home/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
