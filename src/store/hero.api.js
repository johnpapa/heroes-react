import axios from 'axios';
import { parseItem, parseList } from './action-utils';
import API from './config';

const captains = console;

export const deleteHeroApi = async hero => {
  const response = await axios.delete(`${API}/heroes/${hero.id}`);
  return parseItem(response, 200);
};

export const updateHeroApi = async hero => {
  captains.log(hero.id);
  const response = await axios.put(`${API}/heroes/${hero.id}`, hero);
  return parseItem(response, 200);
};

export const addHeroApi = async hero => {
  const response = await axios.post(`${API}/heroes`, hero);
  return parseItem(response, 201);
};

export const loadHeroesApi = async () => {
  const response = await axios.get(`${API}/heroes`);
  return parseList(response, 200);
};
