import { Route, Routes } from "react-router-dom";
import CheckOut from "../Checkout/Checkout";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductList from "../ProductList/ProductList";
import Cart from "../Cart/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product-details/:id/:title" element={<ProductDetails />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
