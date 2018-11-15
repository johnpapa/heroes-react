import axios from 'axios';
import API from './config';
const captains = console;

export const deleteVillainApi = async villain => {
  const response = await axios.delete(`${API}/villains/${villain.id}`);
  if (response.status !== 200) throw Error(response.message);
  return response.data;
};

export const updateVillainApi = async villain => {
  captains.log(villain.id);
  const response = await axios.put(`${API}/villains/${villain.id}`, villain);
  if (response.status !== 200) throw Error(response.message);
  return response.data;
};

export const addVillainApi = async villain => {
  const response = await axios.post(`${API}/villains`, villain);
  if (response.status !== 201) throw Error(response.message);
  return response.data;
};

export const loadVillainsApi = async () => {
  const response = await axios.get(`${API}/villains`);
  if (response.status !== 200) throw Error(response.message);
  return response.data;
};
