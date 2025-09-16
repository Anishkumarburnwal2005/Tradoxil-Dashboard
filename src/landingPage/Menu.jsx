import { useState } from "react";

export default function Menu() {
  let [linkNo, setLinkNo] = useState(0);
  let [isHoverEffect, setIsHoverEffect] = useState(false);

  function haldleLinks(index) {
    setLinkNo(index);
  }

  function haldleClassAdding() {
    setIsHoverEffect(!isHoverEffect);
  }

  return (
    <div className="row border-bottom">
      <div className="col logoImgDiv">
        <img src="\img\tradoxilLogoImg.jpg" alt="img" className="logoImg" />
      </div>
      <div className="col">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link" href="/" style={{ textDecoration: "none" }}>
                  <p
                    className={linkNo == 1 ? "special" : "normal"}
                    onClick={() => haldleLinks(1)}
                  >
                    Dashboard
                  </p>
                </a>
                <a
                  class="nav-link"
                  href="/orders"
                  style={{ textDecoration: "none" }}
                >
                  <p
                    className={linkNo == 2 ? "special" : "normal"}
                    onClick={() => haldleLinks(2)}
                  >
                    Orders
                  </p>
                </a>
                <a
                  class="nav-link"
                  href="/holdings"
                  style={{ textDecoration: "none" }}
                >
                  <p
                    className={linkNo == 3 ? "special" : "normal"}
                    onClick={() => haldleLinks(3)}
                  >
                    Holdings
                  </p>
                </a>
                <a
                  class="nav-link"
                  href="/Positions"
                  style={{ textDecoration: "none" }}
                >
                  <p
                    className={linkNo == 4 ? "special" : "normal"}
                    onClick={() => haldleLinks(4)}
                  >
                    Positions
                  </p>
                </a>
                <a
                  class="nav-link"
                  href="/funds"
                  style={{ textDecoration: "none" }}
                >
                  <p
                    className={linkNo == 5 ? "special" : "normal"}
                    onClick={() => haldleLinks(5)}
                  >
                    Funds
                  </p>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
