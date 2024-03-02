import HttpClient from "../utils/httpClient";

const http = new HttpClient('http://localhost:3000/auth');

const listUsers = () => {
  return http.get('/');
}

const getUserById = (id) => {
  return http.get(`/${id}`);
}

const registerUser = (user) => {
  return http.post('/register', { body: user });
}

const login = (user) => {
  return http.post('/login', { body: user });
}

export default {
  listUsers,
  getUserById,
  registerUser,
  login,
}