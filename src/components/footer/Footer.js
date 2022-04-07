import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <section className="ft-main">
          <div className="ft-main-item">
            <h2 className="ft-title">COMPANY</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Sell With Us</a>
              </li>
              <li>
                <a href="#">Our Sellers</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">CUSTOMER SERVICE</h2>
            <ul>
              <li>
                <a href="#">Help and FAQs</a>
              </li>
              <li>
                <a href="#">Exchange and Returns Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">OUR STORES</h2>
            <ul>
              <li>
                <a href="#">Stores and Services</a>
              </li>
              <li>
                <a href="#">Location and Hours</a>
              </li>
              <li>
                <a href="#">Catalogs</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Subscribe Newsletter</h2>

            <form>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </section>
        {/* Footer social */}
        <section className="ft-social">
          <ul className="ft-social-list">
            <li>
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </section>
        {/* Footer legal */}
        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li>Copyrights © 2021 Company Ltd. All rights reserved.</li>
          </ul>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
