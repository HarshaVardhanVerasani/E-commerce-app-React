import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, applyFilters, removeFromCart } from "../../redux/slice";
import "../ProductList/productList.css";

const ProductList = () => {
  const totalProducts = useSelector((store) => store.e_commerce.TotalProducts);
  const cart = useSelector((store) => store.e_commerce.CartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    byNames: false,
    lowToHigh: false,
    highToLow: false,
  });

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
        console.log("button for i and button", e.target.parentElement.value);
      }
      return;
    }
    navigate(`/product-details/${id}/${title}`);
  }

  function handleFilterEvents(e) {
    if (e.target.name === "BY_NAMES") {
      setFilters({ ...filters, byNames: !filters.byNames });
    } else if (e.target.name === "LOW_TO_HIGH") {
      setFilters({
        ...filters,
        lowToHigh: true,
        highToLow: false,
      });
    } else if (e.target.name === "HIGH_TO_LOW") {
      setFilters({
        ...filters,
        lowToHigh: false,
        highToLow: true,
      });
    } else if (e.target.name === "CLEAR_FILTER") {
      setFilters({
        byNames: false,
        lowToHigh: false,
        highToLow: false,
      });
    }
  }

  useEffect(() => {
    dispatch(applyFilters(filters));
  }, [filters]);

  let renderList = totalProducts.map((product) => {
    const { id, title, thumbnail, price, rating } = product;
    return (
      <div
        className="product-wrapper"
        key={id}
        onClick={(e) => checkEvents(e, id, title)}
      >
        <div className="product">
          <div className="product-img">
            <img src={`${thumbnail}`} alt={title} />
          </div>
          <button className="favorite-icon" name="ADD_TO_FAVORITE" value={id}>
            <i className="fa-regular fa-heart"></i>
          </button>
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

  return (
    <>
      {(renderList.length === 0 || renderList === undefined) && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {renderList.length > 0 && (
        <div className="container filter-section">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-info dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filters
            </button>
            <ul className="dropdown-menu">
              <label className="form-check-label" htmlFor="BY_NAMES">
                A to Z order
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="BY_NAMES"
                checked={filters.byNames}
                onChange={handleFilterEvents}
              />
              <li>
                <label className="form-check-label" htmlFor="LOW_TO_HIGH">
                  Low To High
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="LOW_TO_HIGH"
                  checked={filters.lowToHigh}
                  onChange={handleFilterEvents}
                />
              </li>
              <li>
                <label className="form-check-label" htmlFor="HIGH_TO_LOW">
                  High To Low
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="HIGH_TO_LOW"
                  checked={filters.highToLow}
                  onChange={handleFilterEvents}
                />
              </li>
              <button
                className="btn btn-secondary"
                name="CLEAR_FILTER"
                onClick={handleFilterEvents}
              >
                Clear Filters
              </button>
            </ul>
          </div>
        </div>
      )}
      <div className="products-list-wrapper">{renderList}</div>
    </>
  );
};

export default ProductList;
