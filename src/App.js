import { Provider } from "react-redux";
import store from "./redux/store";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h2>Personal Finance Tracker</h2>
        <Balance />
        <TransactionList />
        <AddTransaction />
      </div>
    </Provider>
  );
};

export default App;
