import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/slice";
import "../ProductList/productList.css";

const ProductList = () => {
  const totalProducts = useSelector((store) => store.e_commerce.TotalProducts);
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
      if (e.target.attributes["name"].value === "ADD_TO_FAVORITE") {
        console.log("button for i and button");
      }
      return;
    }
    navigate(`/product-details/${id}/${title}`);
  }

  function handleFilterEvents (e) {
    
    console.log(e.target)
  }

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
          <button className="favorite-icon">
            <i className="fa-regular fa-heart" name="ADD_TO_FAVORITE"></i>
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
      <div className="filter-section">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-info dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filters
          </button>
          <ul class="dropdown-menu">
            <label className="form-check-label" htmlFor="alphabetical">
              A to Z order
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              name="flexRadioDefault"
              id="alphabetical"
              onChange={handleFilterEvents}
            />
            <li>
              <label className="form-check-label" htmlFor="ascending">
                Ascending Order
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="ascending"
                onChange={handleFilterEvents}
              />
              <label className="form-check-label" htmlFor="descending">
                Descending Order
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="descending"
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
      <div className="products-list-wrapper">{renderList}</div>
    </>
  );
};

export default ProductList;
