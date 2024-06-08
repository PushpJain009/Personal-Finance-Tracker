import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import { loadTransactions } from "./redux/actions";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("transactions")) || [];
    dispatch(loadTransactions(localData));
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Personal Finance Tracker</h2>
      <Balance />
      <TransactionList />
      <AddTransaction />
    </div>
  );
};

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithStore;
