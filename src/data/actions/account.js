const { BACKEND } = process.env;

export const loansAndSavings = async (dispatch) => {
  const response = await fetch(`${BACKEND}/savingsandloans`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  let data = await response.json();
  return data
};

export const changeSavings = async (data) => {
  const response = await fetch(`${BACKEND}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
  let responseData = await response.json();
  return responseData
};

export const requestLoan = async (data) => {

  const response = await fetch(`${BACKEND}/loans`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
  let responseData = await response.json();
  return responseData
};

export const generalStats = async () => {
  const response = await fetch(`${BACKEND}/stats`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  let responseData = await response.json();
  return responseData
};

export const getPendingRequests = async () => {
  const response = await fetch(`${BACKEND}/savings`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  let responseData = await response.json();
  return responseData
};

export const savingsApproval = async (id, data, email) => {

  const response = await fetch(`${BACKEND}/users?email=${email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
  let responseData = await response.json();

  return responseData
};

export const getLoans = async () => {

  const response = await fetch(`${BACKEND}/loans`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  let responseData = await response.json();

  return responseData
};

export const loansApproval = async (id, approval) => {

  const response = await fetch(`${BACKEND}/loans?loanId=${id}&status=${approval}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  let responseData = await response.json();

  return responseData
};

export const activeAccounts = async () => {

  const response = await fetch(`${BACKEND}/books/1/accounts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  let responseData = await response.json();

  return responseData
};

export const postJournal = async (data) => {

  const response = await fetch(`${BACKEND}/books/1/ledger`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
  let responseData = await response.json();

  return responseData
};

export const getTransactions = async (data) => {

  const response = await fetch(`${BACKEND}/books/1/transactions?account=${data.account}&accountCode=${data.accountCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  let responseData = await response.json();

  return responseData
};

export const createNewAccount = async (data) => {

  const response = await fetch(`${BACKEND}/books/1/accounts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
  let responseData = await response.json();

  return responseData
};

export const requestPromoLoan = async (data) => {

  const response = await fetch(`${BACKEND}/promoloans`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
  let responseData = await response.json();
  return responseData
};

export const createPromoItem = async (data) => {

  const response = await fetch(`${BACKEND}/addpromo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
  let responseData = await response.json();
  return responseData
};