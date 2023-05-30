import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const FavoriteList = () => {
  const favList = useSelector((store) => store.e_commerce.Favorite);
  return (
    <div className="products-list-wrapper">
      {favList.length === 0 ? (
        <>
          <h4>💖</h4>
          <b>Favorite list is empty</b>
        </>
      ) : (
        <ProductCard data={favList} />
      )}
    </div>
  );
};
export default FavoriteList;
