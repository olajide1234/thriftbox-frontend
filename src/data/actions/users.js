
export const contactDetails = async (dispatch) => {
  const response = await fetch('http://localhost:5000/exco', {
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

export const allMembers = async () => {
  const response = await fetch('http://localhost:5000/members', {
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

