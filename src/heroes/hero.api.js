import axios from 'axios';

const API = '/api';
const captains = console;

export const deleteHeroApi = async hero => {
  const response = await axios.delete(`${API}/heroes/${hero.id}`);
  if (response.status !== 200) throw Error(response.message);
  return response.data;
};

export const updateHeroApi = async hero => {
  captains.log(hero.id);
  const response = await axios.put(`${API}/heroes/${hero.id}`, hero);
  if (response.status !== 200) throw Error(response.message);
  return response.data;
};

export const addHeroApi = async hero => {
  const response = await axios.post(`${API}/heroes`, hero);
  if (response.status !== 201) throw Error(response.message);
  return response.data;
};

export const loadHeroesApi = async () => {
  const response = await axios.get(`${API}/heroes`);
  if (response.status !== 200) throw Error(response.message);
  return response.data;
}
