import { Route, Routes } from "react-router-dom";
import CheckOut from "../Checkout/Checkout";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductList from "../ProductList/ProductList";
import Cart from "../Cart/Cart";
import ErrorPage from "../404Error/ErrorPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product-details/:id/:title" element={<ProductDetails />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/checkout/:id/:quantity" element={<CheckOut />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
};

export default AppRoutes;
