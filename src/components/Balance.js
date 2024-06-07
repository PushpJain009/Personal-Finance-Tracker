import { useSelector } from "react-redux";
import "./Balance.css";

const Balance = () => {
  const transactions = useSelector((state) => state.transactions);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <h1>₹{total}</h1>
    </div>
  );
};

export default Balance;
