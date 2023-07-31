import axios from 'axios';
import queryString from 'query-string';
import { NoteTakingInterface, NoteTakingGetQueryInterface } from 'interfaces/note-taking';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getNoteTakings = async (
  query?: NoteTakingGetQueryInterface,
): Promise<PaginatedInterface<NoteTakingInterface>> => {
  const response = await axios.get('/api/note-takings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createNoteTaking = async (noteTaking: NoteTakingInterface) => {
  const response = await axios.post('/api/note-takings', noteTaking);
  return response.data;
};

export const updateNoteTakingById = async (id: string, noteTaking: NoteTakingInterface) => {
  const response = await axios.put(`/api/note-takings/${id}`, noteTaking);
  return response.data;
};

export const getNoteTakingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/note-takings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNoteTakingById = async (id: string) => {
  const response = await axios.delete(`/api/note-takings/${id}`);
  return response.data;
};
