import axios from 'axios';
import { parseItem, parseList } from './action-utils';
import API from './config';

const captains = console;

export const deleteVillainApi = async villain => {
  const response = await axios.delete(`${API}/villains/${villain.id}`);
  return parseItem(response, 200);
};

export const updateVillainApi = async villain => {
  captains.log(villain.id);
  const response = await axios.put(`${API}/villains/${villain.id}`, villain);
  return parseItem(response, 200);
};

export const addVillainApi = async villain => {
  const response = await axios.post(`${API}/villains`, villain);
  return parseItem(response, 201);
};

export const loadVillainsApi = async () => {
  const response = await axios.get(`${API}/villains`);
  return parseList(response, 200);
};
