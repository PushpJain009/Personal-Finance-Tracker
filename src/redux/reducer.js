const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      const updatedTransactions = [...state.transactions, action.payload];
      localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
      return {
        ...state,
        transactions: updatedTransactions,
      };
    case "DELETE_TRANSACTION":
      const filteredTransactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      localStorage.setItem(
        "transactions",
        JSON.stringify(filteredTransactions)
      );
      return {
        ...state,
        transactions: filteredTransactions,
      };
    case "CLEAR_UNSETTLED":
      localStorage.removeItem("transactions");
      return {
        ...state,
        transactions: [],
      };
    case "LOAD_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;