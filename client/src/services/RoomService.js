import HttpClient from "../utils/httpClient";

const http = new HttpClient('http://localhost:3000/rooms');

const listRooms = () => {
  return http.get('/');
}

const getRoomById = (id) => {
  return http.get(`/${id}`);
}

const createRoom = (room) => {
  return http.post('/', { body: room });
}

const editRoom = (id, room) => {
  return http.put(`/${id}`, { body: room });
}

const deleteRoom = (id) => {
  return http.delete(`/${id}`);
}

export default {
  listRooms,
  getRoomById,
  createRoom,
  editRoom,
  deleteRoom,
}