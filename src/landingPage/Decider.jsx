import { useState } from "react";
import axios from "axios";

export default function Decider({ uid }) {
  let [quantity, setQuantity] = useState();
  let [price, setPrice] = useState();

  async function stockBuy() {
    await axios.post("https://tradoxil-backend.onrender.com/newOrder", {
      name: uid,
      qty: quantity,
      price: price,
      mode: "Buy",
    });
  }

  return (
    <div className="container mt-4">
      <div className="row flex-nowrap">
        <div class="input-group  mb-3" style={{ width: "13.5rem" }}>
          <span class="input-group-text" id="basic-addon1">
            Qty.
          </span>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            placeholder="1"
          />
        </div>
        <div class="input-group mb-3" style={{ width: "13.5rem" }}>
          <span class="input-group-text" id="basic-addon1">
            Price
          </span>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder="0.00"
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-3">
          <a href="/">
            <button
              type="button"
              class="btn btn-outline-primary"
              style={{ width: "5.5rem" }}
              onClick={stockBuy}
            >
              Buy
            </button>
          </a>
        </div>

        <div className="col-2"></div>

        <div className="col-3">
          <a href="/" style={{ width: "4rem" }}>
            <button
              type="button"
              class="btn btn-outline-danger"
              style={{ width: "5.5rem" }}
            >
              Cancle
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
