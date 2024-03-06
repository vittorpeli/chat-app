import HttpClient from "../utils/httpClient";

const http = new HttpClient('http://localhost:3000/rooms');

const listRooms = async () => {
  const res = await http.get('/');
  return res.data;
}

const getRoomById = async (id) => {
  const res = await http.get(`/${id}`);
  return res.data;
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