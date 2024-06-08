export const addTransaction = (transaction) => {
  return {
      type: 'ADD_TRANSACTION',
      payload: transaction
  };
};

export const deleteTransaction = (id) => {
  return {
      type: 'DELETE_TRANSACTION',
      payload: id
  };
};

export const clearUnsettled = () => {
  return {
      type: 'CLEAR_UNSETTLED'
  };
};

export const loadTransactions = (transactions) => {
  return {
      type: 'LOAD_TRANSACTIONS',
      payload: transactions
  };
};
