import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Bank from "./assets/bank.png";
import Cash from "./assets/cash-counter.png";
import Locker from "./assets/locker.png";
import MoneyBag from "./assets/money-bag.png";
import PiggyBag from "./assets/piggy-bank.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <img src={Bank} alt="bank" width={200} height={200} className="bank_img" />
    <img src={Cash} alt="bank" width={200} height={200} className="cash_img" />
    <img
      src={Locker}
      alt="bank"
      width={200}
      height={200}
      className="locker_img"
    />
    <img
      src={MoneyBag}
      alt="bank"
      width={200}
      height={200}
      className="money_bag_img"
    />
    <img
      src={PiggyBag}
      alt="bank"
      width={200}
      height={200}
      className="piggy_bank_img"
    />
  </React.StrictMode>
);
