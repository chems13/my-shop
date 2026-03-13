import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="/">
          Home
        </Link>

        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/Products">
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Card">
              Card
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Category">
              Category
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Checkout">
              Checkout
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ProduitDetail">
              ProduitDetail
            </Link>
          </li>
        </ul>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
