import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTransaction,
  clearUnsettled,
  loadTransactions,
} from "../redux/actions";
import "./TransactionList.css";

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  // Load transactions from localStorage when component mounts
  useEffect(() => {
    const storedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];
    dispatch(loadTransactions(storedTransactions));
  }, [dispatch]);

  return (
    <div className="transaction-list">
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? "minus" : "plus"}
          >
            {transaction.text}{" "}
            <span>
              {transaction.amount < 0 ? "- " : "+ "}₹
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
