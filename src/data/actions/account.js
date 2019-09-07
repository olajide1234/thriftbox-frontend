export const loansAndSavings = async (dispatch) => {
  const response = await fetch('http://localhost:5000/savingsandloans', {
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
  const response = await fetch('http://localhost:5000/users', {
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
  const response = await fetch('http://localhost:5000/loans', {
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

