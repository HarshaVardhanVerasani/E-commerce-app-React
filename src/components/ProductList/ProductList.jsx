import { useSelector } from "react-redux";
import FiltersComponent from "../Filters/Filters";
import LoadingBar from "../LoadingBar/LoadingBar";
import ProductCard from "../ProductCard/ProductCard";
import "../ProductList/productList.css";

const ProductList = () => {
  const totalProducts = useSelector((store) => store.e_commerce.TotalProducts);
  return (
    <>
      <LoadingBar data={totalProducts} />
      {totalProducts.length > 0 && (
        <>
          <FiltersComponent />
          <div className="products-list-wrapper">
            <ProductCard data={totalProducts} />
          </div>
        </>
      )}
    </>
  );
};

export default ProductList;
