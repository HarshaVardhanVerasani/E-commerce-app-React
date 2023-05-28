import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <h1>This is Home page</h1>
      <p>Under construction</p>
      <Link to="/product-list">
        <button className="btn btn-warning">Show Products</button>
      </Link>
    </>
  );
};

export default LandingPage;
