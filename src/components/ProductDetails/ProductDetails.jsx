import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";

const ProductDetails = () => {
  const param = useParams();
  const { id } = param;
  const [product, setProduct] = useState();

  async function getProduct(id) {
    const response = await axios
      .get(`https://dummyjson.com/products/${id}`)
      .catch((err) => console.log(err));
    setProduct(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getProduct(id);
  }, []);

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

      {product && (
        <div
          id="carouselExampleRide"
          class="carousel slide"
          data-bs-ride="true"
        >
          <div class="carousel-inner">
            {product.images.map((imgSrc, i) => {
              if (i === 0) {
                return (
                  <div class="carousel-item active">
                    <img src={imgSrc} class="d-block w-100" alt={imgSrc} />
                  </div>
                );
              } else {
                return (
                  <div class="carousel-item">
                    <img src={imgSrc} class="d-block w-100" alt={imgSrc} />
                  </div>
                );
              }
            })}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
