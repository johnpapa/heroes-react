import axios from 'axios';

const API = '/api';

export const loadVillainApi = async () => {
  const response = await axios.get(`${API}/villains`);
  if (response.status !== 200) throw Error(response.message);
  return response.data;
}
