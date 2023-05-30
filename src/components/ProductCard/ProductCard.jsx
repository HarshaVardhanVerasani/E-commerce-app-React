import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  addToFavorite,
  removeFromCart,
  removeFromFavorite,
} from "../../redux/slice";
import "./productCard.css";

const ProductCard = ({ data }) => {
  const favoriteList = useSelector((store) => store.e_commerce.Favorite);
  const cart = useSelector((store) => store.e_commerce.CartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddOrRemoveFromCart(e, id) {
    if (e.target.name === "ADD_TO_CART") {
      dispatch(addToCart(id));
    } else if (e.target.name === "REMOVE_FROM_CART") {
      dispatch(removeFromCart(id));
    }
  }

  function checkEvents(e, id, title) {
    if (e.target.tagName === "BUTTON") {
      handleAddOrRemoveFromCart(e, id);
      return;
    } else if (e.target.tagName === "I") {
      if (e.target.parentElement.name === "ADD_TO_FAVORITE") {
        dispatch(addToFavorite(e.target.parentElement.value));
      } else if (e.target.parentElement.name === "REMOVE_FROM_FAVORITE") {
        dispatch(removeFromFavorite(e.target.parentElement.value));
      }
      return;
    }
    navigate(`/product-details/${id}/${title}`);
  }

  let result = data.map((product) => {
    const { id, title, thumbnail, price, rating } = product;
    return (
      <div
        className="product-wrapper"
        key={id}
        onClick={(e) => checkEvents(e, id, title)}
      >
        <div className="product-image-section">
          <div className="product-img">
            <img src={`${thumbnail}`} alt={title} />
          </div>
          {favoriteList.some((p) => p.id === id) ? (
            <button
              className="favorite-icon remove"
              name="REMOVE_FROM_FAVORITE"
              value={id}
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          ) : (
            <button className="favorite-icon" name="ADD_TO_FAVORITE" value={id}>
              <i className="fa-regular fa-heart"></i>
            </button>
          )}
        </div>
        <div className="product-details">
          <div className="product-title">
            <h4>{title}</h4>
          </div>
          <div className="product-cost">
            <span>${price}</span>
          </div>
          <div className="product-rating">
            <div className="stars">
              <i className="fa-solid fa-star" style={{ color: "#3ae21d" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#3ae21d" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#3ae21d" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#3ae21d" }}></i>
              <i
                className="fa-solid fa-star-half"
                style={{ color: "#3ae21d" }}
              ></i>
            </div>
            <div className="rating-number">
              <p>{rating}/5</p>
            </div>
          </div>
          <div className="add-to-cart">
            {cart.some((product) => product.id === id) ? (
              <button name="REMOVE_FROM_CART" className="btn btn-danger">
                Remove from Cart
              </button>
            ) : (
              <button name="ADD_TO_CART" className="btn btn-primary">
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    );
  });

  return result;
};

export default ProductCard;
