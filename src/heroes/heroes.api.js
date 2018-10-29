import axios from 'axios';
const API = '/api';

export const deleteHeroApi = async hero => {
  const response = await axios.delete(`${API}/hero/${hero.id}`);
  if (response.status !== 200) throw Error(response.message);
  return response.data;
};
export const putHeroesApi = async hero => {
  const response = await axios.put(`${API}/hero/${hero.id}`, hero);
  if (response.status !== 200) throw Error(response.message);
  return response.data;
};
export const postHeroesApi = async hero => {
  const response = await axios.post(`${API}/hero`, hero);
  if (response.status !== 201) throw Error(response.message);
  return response.data;
};
export const getHeroesApi = async () => {
  const response = await axios.get(`${API}/heroes`);
  if (response.status !== 200) throw Error(response.message);
  return response.data;
}