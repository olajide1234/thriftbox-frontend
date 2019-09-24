const { BACKEND } = process.env;

export const getAllPromoItems = async () => {
  const response = await fetch(`${BACKEND}/promo`, {
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

export const getPromoItem = async (data) => {
  const response = await fetch(`${BACKEND}/promo/${data}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  let responseDetails = await response.json();

  return responseDetails
};

export const editPromoItem = async (id, data) => {
  const response = await fetch(`${BACKEND}/promo/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
  let responseDetails = await response.json();

  return responseDetails
};
