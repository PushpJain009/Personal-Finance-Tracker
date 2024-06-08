import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction, clearUnsettled } from "../redux/actions";
import "./TransactionList.css";

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  return (
    <div className="transaction-list">
      {/* <h3>History</h3> */}
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? "minus" : "plus"}
          >
            {transaction.text}{" "}
            <span>
              {transaction.amount < 0 ? "-" : "+"}$
              {Math.abs(transaction.amount)}
            </span>
            <button
              onClick={() => dispatch(deleteTransaction(transaction.id))}
              className="delete-btn"
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <button className="clear-btn" onClick={() => dispatch(clearUnsettled())}>
        Clear Unsettled
      </button>
    </div>
  );
};

export default TransactionList;
