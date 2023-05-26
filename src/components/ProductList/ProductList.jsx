import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/slice";
import "../ProductList/productList.css";

const ProductList = () => {
  const store = useSelector((store) => store.e_commerce.TotalProducts);
  const cart = useSelector((store) => store.e_commerce.CartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddOrRemoveFromCart(e, id) {
    if (e.target.name === "ADD_TO_CART") {
      let findProduct = store.find((product) => product.id === Number(id));
      findProduct = { ...findProduct, quantity: 1 };
      dispatch(addToCart(findProduct));
    } else if (e.target.name === "REMOVE_FROM_CART") {
      let newCart = cart.filter((product) => product.id !== Number(id));
      dispatch(removeFromCart(newCart));
    }
  }

  function showSingleProduct(e, id, title) {
    if (e.target.tagName === "BUTTON") {
      handleAddOrRemoveFromCart(e, id);
      return;
    }
    navigate(`/product-details/${id}/${title}`);
  }

  let renderList = store.map((product) => {
    const { id, title, thumbnail, price, rating } = product;
    return (
      <div
        className="product-wrapper"
        key={id}
        onClick={(e) => showSingleProduct(e, id, title)}
      >
        <div className="product">
          <div className="product-img">
            <img src={`${thumbnail}`} alt={title} />
          </div>
          <div className="favorite-icon">
            <img
              src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9df775b939f51a0b22f6d_Icon.svg"
              alt="favorite-icon"
            />
          </div>
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
      {renderList.length === 0 && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="products-list-wrapper">{renderList}</div>
    </>
  );
};

export default ProductList;
