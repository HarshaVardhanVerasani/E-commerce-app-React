import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../ProductList/productList.css";

const ProductList = () => {
  const navigate = useNavigate();
  const store = useSelector((store) => store.e_commerce.productsList);

  function handleAddToCart(id) {
    console.log(id);
  }

  function handleClick(id, title) {
    navigate(`/product-details/${id}/${title}`);
  }

  let renderList = store.map((product) => {
    const { id, title, thumbnail, price, rating } = product;
    return (
      <div
        className="product-wrapper"
        key={id}
        onClick={() => handleClick(id, title)}
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
            <span>$</span>
            <span>{price}</span>
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
            <button className="btn" onClick={() => handleAddToCart(id)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <div className="products-list-wrapper">{renderList}</div>;
};

export default ProductList;
