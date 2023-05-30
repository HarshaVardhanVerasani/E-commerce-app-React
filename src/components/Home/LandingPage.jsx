import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./landingPage.css";

const LandingPage = () => {
  const [catagories, setCatagories] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();

  async function getCatagories() {
    try {
      let data = await fetch("https://dummyjson.com/products/categories");
      let responseData = await data.json();
      setCatagories(responseData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCatagories();
  }, []);

  async function getSelectedCatagories(name) {
    try {
      let data = await fetch(`https://dummyjson.com/products/category/${name}`);
      let responseData = await data.json();
      setCategoryData(responseData.products);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSelectedCategory(e) {
    if (e.target.tagName === "BUTTON") {
      getSelectedCatagories(e.target.value);
    }
  }

  return (
    <div className="container catagories-wrapper text-center">
      <div className="row">
        <div className="col">
          <h2>Select Your Favorite Category</h2>
          <div className="catagories" onClick={handleSelectedCategory}>
            {catagories.map((name, i) => (
              <button className="btn btn-warning" key={i} value={name}>
                {name}
              </button>
            ))}
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/product-list")}
            >
              All Products
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="products-list-wrapper ">
            <ProductCard data={categoryData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
