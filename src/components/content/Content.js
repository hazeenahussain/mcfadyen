import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div>
      {/* header above image */}
      <p
        style={{
          fontFamily: "Seoge UI",
          fontSize: "14px",
          color: "#707070",
          lineHeight: "18.62px",
        }}
      >
        Home > Bakery > Organic Bread
      </p>

      <p
        style={{
          fontFamily: "Seoge UI",
          fontSize: "36px",
          color: "#707070",
          lineHeight: "47.88px",
        }}
      >
        {" "}
        Dave's Killer Bread® Organic 21 Whole Grain Bread
      </p>

      <span>
        <div className="rating">
          <i className="glyphicon glyphicon-star" />
          <i className="glyphicon glyphicon-star" />
          <i className="glyphicon glyphicon-star" />
          <i className="glyphicon glyphicon-star" />
          <i className="glyphicon glyphicon-star half" />
        </div>
      </span>
      <span>5 reviews</span>
      {/* body of image */}
      <div>
        <section className="ft-main">
          <div className="ft-main-item">
            <img src="./images/1.png"></img>
          </div>
          <div className="ft-main-item">
            {/* <h2 className="ft-title">Resources</h2> */}
            <ul>
              {/* div for 1st dollor */}
              <div style={{ border: " 1px solid #CFCFCF" }}>
                <img src="./images/bullet.png"></img>
                {/* <div className='bullet'> */}

                <li
                  style={{
                    fontFamily: "Seoge UI",
                    fontSize: "36px",
                    color: "#707070",
                    lineHeight: "47.88px",
                  }}
                >
                  $5.99
                </li>
                <li
                  style={{
                    fontFamily: "Seoge UI",
                    fontSize: "14px",
                    color: "#707070",
                    lineHeight: "18.62px",
                  }}
                >
                  Shipping cost: $5.00
                </li>
                {/* </div> */}
              </div>
              {/* div for 2nd dollor */}
              <div>
                <img src="./images/bullet.png"></img>

                <li
                  style={{
                    fontFamily: "Seoge UI",
                    fontSize: "36px",
                    color: "#707070",
                    lineHeight: "47.88px",
                  }}
                >
                  $3.89
                </li>
                <li
                  style={{
                    fontFamily: "Seoge UI",
                    fontSize: "14px",
                    color: "#707070",
                    lineHeight: "18.62px",
                  }}
                >
                  Shipping cost: $8.00
                </li>
              </div>
              {/* </div>      */}
              {/* div for 3rd dollor */}
              <div>
                <img src="./images/bullet.png"></img>
                {/* <div className='bullet'> */}
                <li
                  style={{
                    fontFamily: "Seoge UI",
                    fontSize: "36px",
                    color: "#707070",
                    lineHeight: "47.88px",
                  }}
                >
                  $7.29
                </li>
                <li
                  style={{
                    fontFamily: "Seoge UI",
                    fontSize: "14px",
                    color: "#707070",
                    lineHeight: "18.62px",
                  }}
                >
                  Free Shipping
                </li>
              </div>
              {/* </div>         */}
            </ul>
          </div>

          {/* ....... */}

          <div
            className="ft-main-item "
            style={{ border: "1px solid #CFCFCF" }}
          >
            <ul>
              {/* div for 1st */}
              <div>
                <li
                  style={{
                    fontFamily: "Seoge UI",
                    fontSize: "16px",
                    color: "#707070",
                    lineHeight: "21.28px",
                  }}
                >
                  Seller: Seller name
                </li>
                <li
                  style={{
                    fontFamily: "Seoge UI",
                    fontSize: "16px",
                    color: "#707070",
                    lineHeight: "21.28px",
                  }}
                >
                  Brand: Dave Killer's Breads
                </li>
              </div>
              {/* div for 2nd  */}
              <div className="seller">
                <li
                  style={{
                    fontFamily: "Seoge UI",
                    fontSize: "16px",
                    color: "#707070",
                    lineHeight: "21.28px",
                  }}
                >
                  Available in
                </li>
                <li>
                  {/* ...... */}
                  <div style={{ padding: "25.5px" }}>
                    <button
                      className="button2 button1 "
                      style={{
                        fontFamily: "Seoge UI",
                        fontSize: "16px",
                        color: "#262626",
                        lineHeight: "21.28px",
                      }}
                    >
                      300 gms
                    </button>
                    <button className="button button1">500 kg</button>
                    <button
                      className="button2 button1"
                      style={{
                        fontFamily: "Seoge UI",
                        fontSize: "16px",
                        color: "#262626",
                        lineHeight: "21.28px",
                      }}
                    >
                      750 kg
                    </button>
                  </div>
                </li>
              </div>

              {/* div for 3rd dollor */}
              <div>
                <li
                  style={{
                    fontFamily: "Seoge UI",
                    fontSize: "16px",
                    color: "#707070",
                    lineHeight: "21.28px",
                  }}
                >
                  Quantity
                </li>
                <li>
                  {/* ...... */}
                  <div style={{ padding: "25.5px" }}>
                    <button
                      className="button2 button1"
                      style={{
                        fontFamily: "Seoge UI",
                        fontSize: "16px",
                        color: "#262626",
                        lineHeight: "21.28px",
                      }}
                    >
                      - 1 +
                    </button>
                    <button
                      className="button2 button1"
                      style={{
                        fontFamily: "Seoge UI",
                        fontSize: "16px",
                        color: "#262626",
                        lineHeight: "21.28px",
                      }}
                    >
                      Enter zip code
                    </button>
                    <button className="button button1">Check</button>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </section>
        {/* ..4th.. */}
        <div>
          <li>
            {/* ...... */}
            <div className="addcart">
              <button className="button button1">Add to Cart</button>
              <button className="button button1">Buy Now</button>
            </div>
          </li>
        </div>
      </div>
      {/* .....img description */}

      <div>
        <p
          style={{
            fontFamily: "Seoge UI",
            fontSize: "20px",
            color: "#707070",
            lineHeight: "26.6px",
          }}
        >
          Description
        </p>
        <div className="image_content" style={{ marginTop: "50px" }}>
          <p
            style={{
              fontFamily: "Seoge UI",
              fontSize: "16px",
              color: "#707070",
              lineHeight: "21.28px",
            }}
          >
            Ingredients: Water, Organic Whole Wheat Flour, Organic Cracked Whole
            Wheat, Organic Cane Sugar, Organic Grain and Seed Topping Mix
            (Organic Flax Seeds, Organic Sunflower Seeds, Organic Brown Sesame
            Seeds, Organic Triticale Flakes [Wheat], Organic Barley Flakes,
            Organic Oat Flakes, Organic Pumpkin Seeds, Organic Rye Flakes,
            Organic Black Sesame Seeds, Organic Millet, Organic Spelt Flakes
            [Wheat], Organic Yellow Cornmeal, Organic Kamut Khorasan Wheat
            Flakes, Organic Quinoa, Organic Poppy Seeds), Organic Wheat Gluten.
          </p>
        </div>

        <p
          style={{
            fontFamily: "Seoge UI",
            fontSize: "20px",
            color: "#707070",
            lineHeight: "26.6px",
          }}
        >
          Related Products
        </p>
        {/* ........imges  */}
        <div className="row">
          <div className="column">
            <img src="./images/1.png" style={{}} />

            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "16px",
                color: "#262626",
                lineHeight: "21.28px",
              }}
            >
              Organic Thin-Sliced Bread{" "}
            </li>
            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "14px",
                color: "#9E9E9E",
                lineHeight: "18.62px",
              }}
            >
              1123307722
            </li>
            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "18px",
                color: "#262626",
                lineHeight: "23.94px",
              }}
            >
              $2.89
            </li>
          </div>
          <div className="column">
            <img src="./images/2.png" style={{}} />
            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "16px",
                color: "#262626",
                lineHeight: "21.28px",
              }}
            >
              Organic Good Seed Bread{" "}
            </li>
            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "14px",
                color: "#9E9E9E",
                lineHeight: "18.62px",
              }}
            >
              1123307723
            </li>
            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "18px",
                color: "#262626",
                lineHeight: "23.94px",
              }}
            >
              $3.45
            </li>
          </div>
          <div className="column">
            <img src="./images/3.png" style={{}} />
            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "16px",
                color: "#262626",
                lineHeight: "21.28px",
              }}
            >
              Pumpkin Seed Bread{" "}
            </li>
            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "14px",
                color: "#9E9E9E",
                lineHeight: "18.62px",
              }}
            >
              2223307725
            </li>
            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "18px",
                color: "#262626",
                lineHeight: "23.94px",
              }}
            >
              $4.99
            </li>
          </div>
          <div className="column">
            <img src="./images/4.png" style={{}} />
            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "16px",
                color: "#262626",
                lineHeight: "21.28px",
              }}
            >
              White Bread{" "}
            </li>
            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "14px",
                color: "#9E9E9E",
                lineHeight: "18.62px",
              }}
            >
              3323307777
            </li>
            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "18px",
                color: "#262626",
                lineHeight: "23.94px",
              }}
            >
              $3.69
            </li>
          </div>
          <div className="column">
            <img src="./images/5.png" style={{}} />
            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "16px",
                color: "#262626",
                lineHeight: "21.28px",
              }}
            >
              Canyon Gluten Free Bread
            </li>
            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "14px",
                color: "#9E9E9E",
                lineHeight: "18.62px",
              }}
            >
              4228930772
            </li>
            <li
              style={{
                fontFamily: "Seoge UI",
                fontSize: "18px",
                color: "#262626",
                lineHeight: "23.94px",
              }}
            >
              $4.99
            </li>
          </div>
        </div>

        {/* ......... */}
      </div>
    </div>
  );
};

export default Content;
