import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./productDetails.css";

const ProductDetails = () => {
  const param = useParams();
  const { id } = param;
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  async function getProduct(id) {
    const response = await axios
      .get(`https://dummyjson.com/products/${id}`)
      .catch((err) => console.log(err));
    setProduct(response.data);
  }

  useEffect(() => {
    getProduct(id);
  }, [id]);

  function handleQuantity(e) {
    setQuantity(e.target.value);
  }

  function handleAddToCart(id) {
    navigate(`/cart/${id}`);
  }

  function handleBuy(id) {
    navigate(`/checkout/${id}/${quantity}`);
  }

  return (
    <section className="product-details-wrapper">
      {product === undefined && (
        <div className="progressive-bar">
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

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col carousel-section">
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
                            alt={imgSrc}
                            className="d-block w-100 img-fluid"
                          />
                        </div>
                      );
                    } else {
                      return (
                        <div className="carousel-item" key={i}>
                          <img
                            src={imgSrc}
                            alt={imgSrc}
                            className="d-block w-100 img-fluid"
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
            <div className="col details">
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
                  <div className="price-quant-section">
                    <h5>Price ${product.price}</h5>
                    <div className="quantity">
                      <label htmlFor="quantity">
                        <b>Quantity</b>{" "}
                      </label>
                      <input
                        id="quantity"
                        type="number"
                        max="5"
                        min="1"
                        value={quantity}
                        onInput={handleQuantity}
                      />
                    </div>
                  </div>
                </div>
                <div className="buy-section">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleBuy(product.id)}
                  >
                    Buy Now
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
