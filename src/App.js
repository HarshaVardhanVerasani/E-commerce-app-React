import { useDispatch } from "react-redux";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AppRoutes from "./components/Routes/AppRoutes";
import axios from "axios";
import { useEffect } from "react";
import { loadProducts } from "./redux/slice";
function App() {
  const dispatch = useDispatch();
  
     async function getAllProducts() {
       const res = await axios
         .get("https://dummyjson.com/products?limit=0")
         .catch((err) => console.log("Error", err));
       dispatch(loadProducts(res.data.products));
     }

     useEffect(() => {
       getAllProducts();
     }, []);

  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
