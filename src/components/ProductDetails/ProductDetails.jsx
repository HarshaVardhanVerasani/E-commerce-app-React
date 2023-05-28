import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/slice";
import "./productDetails.css";

const ProductDetails = () => {
  const cart = useSelector((store) => store.e_commerce.CartItems);
  const totalProducts = useSelector((store) => store.e_commerce.TotalProducts);

  const param = useParams();
  const { id } = param;
  const product = totalProducts.find((product) => product.id === +id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleBuyNow(id) {
    dispatch(addToCart(id));
    navigate("/cart");
  }

  return (
    <section className="product-details-wrapper mt-4">
      {product === undefined && (
        <div className="progressive-bar text-center">
          <button className="btn btn-primary" type="button">
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      )}

      <div className="row flex-wrap justify-content-space-between">
        <div className="col-lg-6 col-md-12 carousel-section">
          {product && (
            <div
              id="carouselExampleRide"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-inner">
                {product.images.map((imgSrc, i) => {
                  if (i === 0) {
                    return (
                      <div className="carousel-item active" key={i}>
                        <img
                          src={imgSrc}
                          alt="images of product"
                          className="d-block w-100"
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div className="carousel-item" key={i}>
                        <img
                          src={imgSrc}
                          alt="images of product"
                          className="d-block w-100"
                        />
                      </div>
                    );
                  }
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          )}
        </div>

        {product && (
          <div className="col-lg-6 col-md-12 details">
            <div>
              <div className="brand">
                <h6>Brand : {product.brand}</h6>
              </div>
              <div className="title">
                <h1>{product.title}</h1>
              </div>
              <div className="ratings">
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#3ae21d" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#3ae21d" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#3ae21d" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#3ae21d" }}
                ></i>
                <i
                  className="fa-solid fa-star-half"
                  style={{ color: "#3ae21d" }}
                ></i>
                <b>{product.rating}</b>
              </div>
              <div className="description">
                <p>{product.description}</p>
              </div>
              <div className="stocks-left">
                <h6>Hurry up</h6>
                <h6>Stocks left : {product.stock}</h6>
              </div>
              <div>
                <h6>Discount Percentage : {product.discountPercentage}</h6>
                <div className="price-section">
                  <h5>Price ${product.price}</h5>
                </div>
              </div>
              <div className="buy-section">
                <button
                  className="btn btn-primary"
                  name="BUY_NOW"
                  onClick={() => handleBuyNow(product.id)}
                >
                  Buy Now
                </button>
                {cart.some((p) => p.id === product.id) ? (
                  <>
                    <button
                      className="btn btn-warning"
                      onClick={() => navigate("/cart")}
                    >
                      Got to Cart
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
                      Remove From Cart
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-warning"
                    onClick={() => dispatch(addToCart(product.id))}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
