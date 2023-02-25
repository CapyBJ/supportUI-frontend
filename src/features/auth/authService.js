import axios from 'axios'

const API_URL = 'https://supportui-backend.onrender.com/api/users/'

// Register user
const register = async (userData) => {

  const response = await axios({
    method: 'post',
    url: API_URL,
    data: userData,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }); 

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios({
    method: 'post',
    url: API_URL + 'login',
    data: userData,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });
   
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Logout user
const logout = () => localStorage.removeItem('user')

const authService = {
  register,
  logout,
  login,
}

export default authService
