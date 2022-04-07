import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <img className="logo" src="./images/logo.png" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ">
              <input
                className="form-control me-2 searchbar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button type="submit">
                <img src="./images/search.png" className="search" />{" "}
              </button>
            </form>

            <img src="./images/user.png" />
            <img src="./images/cart.png" />
          </div>
        </div>
      </nav>
      {/* .......... */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar_background">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginLeft: "100px" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 items">
              <li className="nav-item ">
                <a className="nav-link " aria-current="page" href="#">
                  Bakery
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">
                  Nuts & Seeds
                </a>
              </li>

              <li className="nav-item ">
                <a className="nav-link  ">Vegetables</a>
              </li>

              <li className="nav-item">
                <a className="nav-link  ">Cheeses</a>
              </li>

              <li className="nav-item">
                <a className="nav-link  ">Sea Food</a>
              </li>

              <li className="nav-item">
                <a className="nav-link ">Dairy</a>
              </li>

              <li className="nav-item">
                <a className="nav-link  ">Meat</a>
              </li>

              <li className="nav-item">
                <a className="nav-link  ">Snacks</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
