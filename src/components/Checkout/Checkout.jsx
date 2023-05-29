import { useSelector } from "react-redux";
import "./checkout.css";
import { useParams } from "react-router-dom";
import american from "../../images/american-express.png";
import apple from "../../images/apple-pay.png";
import google from "../../images/google-pay.png"
import paypal from "../../images/paypal.png";
import paytm from "../../images/paytm.png"
import visa from "../../images/visa.png"

const CheckOut = () => {
  const param = useParams()
  const {bill} = param
  const Cart = useSelector((store) => store.e_commerce.CartItems);


  return (
    <>
      <div className="checkout">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">SubTotal</th>
            </tr>
          </thead>
          <tbody>
            {Cart.map((product, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>${product.quantity * product.price}</td>
              </tr>
            ))}
            <tr>
              <th scope="row">#</th>
              <td colspan="3">
                <b>Total Bill</b>
              </td>
              <td>
                <b> ${bill}</b>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="payment-btn">
          <button className="btn btn-success">Proceed To Payment</button>
        </div>
      </div>
      <footer className="checkout-footer">
        <h4>We Accept All Types Of Payment Methods</h4>
        <div className="payment-methods">
          <img src={american} alt="american-express" />
          <img src={apple} alt="apple-pay" />
          <img src={google} alt="google-pay" />
          <img src={paypal} alt="paypal" />
          <img src={paytm} alt="paytm" />
          <img src={visa} alt="visa" />
        </div>
      </footer>
    </>
  );
};

export default CheckOut;
