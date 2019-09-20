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
