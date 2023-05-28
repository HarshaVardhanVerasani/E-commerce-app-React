import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const cart = useSelector((store) => store.e_commerce.CartItems);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/70f7d800-e089-44c5-8d2c-aae8f7111278/dcdp6t3-7740d6a8-7962-47d8-958e-02b3af0416c0.jpg/v1/fill/w_1024,h_937,q_75,strp/online_store_logo_by_creative_p_dcdp6t3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwZjdkODAwLWUwODktNDRjNS04ZDJjLWFhZThmNzExMTI3OFwvZGNkcDZ0My03NzQwZDZhOC03OTYyLTQ3ZDgtOTU4ZS0wMmIzYWYwNDE2YzAuanBnIiwiaGVpZ2h0IjoiPD05MzciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC83MGY3ZDgwMC1lMDg5LTQ0YzUtOGQyYy1hYWU4ZjcxMTEyNzhcL2NyZWF0aXZlLXAtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.iPdw7pn49iMs32m8QAmPq1LdxRJ8dfJPOF381v2oWGs"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                <b>Home</b>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product-list">
                <b>Products</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <b>Cart</b>{" "}
                <i className="badge">{cart.length ? cart.length : ""}</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <b>Login</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
