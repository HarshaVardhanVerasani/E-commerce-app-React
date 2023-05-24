import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AppRoutes from "./components/Routes/AppRoutes";
import { onWindowLoad } from "./redux/slice";

function App() {
  const dispatch = useDispatch();
  
  async function get() {
    const res = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => console.log("Error", err));
      dispatch(onWindowLoad(res.data.products));
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
