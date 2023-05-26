import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DecreaseQuantity, IncreaseQuantity } from "../../redux/slice";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.e_commerce.CartItems);
  console.log(cart, "j");
  const [totalItems, setTotalItems] = useState();
  const [grandTotal, setGrandTotal] = useState();

  function handleQuantity(e) {
    if (e.target.tagName === "BUTTON") {
      if (e.target.name === "INCREMENT") {
        dispatch(IncreaseQuantity(Number(e.target.value)));
      } else if (e.target.name === "DECREMENT") {
        dispatch(DecreaseQuantity(Number(e.target.value)));
      }
    }
  }

  useEffect(() => {
    let total = 0;
    let items = 0
    for (let product of cart) {
      total = total + product.quantity * product.price;
      items = items + product.quantity
    }
    setGrandTotal(total)
    setTotalItems(items)
    console.log(total, items);
  },[cart]);

 

  return (
    <div className="cart-wrapper">
      <div className="cart-items" onClick={handleQuantity}>
        {cart.map((product, i) => {
          const { id, title, thumbnail, price, quantity } = product;
          return (
            <div className="item">
              <b>{i + 1}</b>
              <div className="image">
                <img src={thumbnail} alt={title} className="img-fluid" />
              </div>
              <div>
                <h5>{title}</h5>
                <h6>${price}</h6>
              </div>
              <div className="quantity-section">
                <button
                  name="INCREMENT"
                  value={id}
                  className="btn btn-secondary"
                >
                  +
                </button>
                <span className="btn">{quantity}</span>
                <button
                  name="DECREMENT"
                  value={id}
                  className="btn btn-secondary"
                >
                  -
                </button>
              </div>
              <div className="sub-total-price">
                <h6>Sub Total</h6>
                <b>${price * quantity}</b>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total-price">
        <div>
          <h4>Total Items In Cart</h4>
          <h5>{totalItems}</h5>
        </div>
        <div>
          <h3>Grand Total</h3>
          <b>${grandTotal}</b>
        </div>
        <div>
          <button className="btn btn-success">Place Order</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
