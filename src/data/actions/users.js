const dotenv = require('dotenv');
dotenv.config();
const BACKEND = process.env;


export const contactDetails = async (dispatch) => {
  const response = await fetch(`${BACKEND}/exco`, {
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
  const response = await fetch(`${BACKEND}/members`, {
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

export const createNewMember = async (data) => {
  const response = await fetch(`${BACKEND}/users/signup`, {
    method: 'POST',
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

export const getCurrentMember = async (data) => {
  const response = await fetch(`${BACKEND}/userdetails?memberId=${data}`, {
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

export const editNewMember = async (memberId, data) => {
  const response = await fetch(`${BACKEND}/userdetails?memberId=${memberId}`, {
    method: 'POST',
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
