import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./checkout.css";

const CheckOut = () => {
  const store = useSelector((store) => store.e_commerce.TotalProducts);
  const param = useParams();
  const product = store.find((item) => item.id == param.id);
  console.log(store)
  return (
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
          <tr>
            <th scope="row">1</th>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td>{param.quantity}</td>
            <td>${param.quantity * product.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckOut;
