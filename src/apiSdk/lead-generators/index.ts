import axios from 'axios';
import queryString from 'query-string';
import { LeadGeneratorInterface, LeadGeneratorGetQueryInterface } from 'interfaces/lead-generator';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLeadGenerators = async (
  query?: LeadGeneratorGetQueryInterface,
): Promise<PaginatedInterface<LeadGeneratorInterface>> => {
  const response = await axios.get('/api/lead-generators', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLeadGenerator = async (leadGenerator: LeadGeneratorInterface) => {
  const response = await axios.post('/api/lead-generators', leadGenerator);
  return response.data;
};

export const updateLeadGeneratorById = async (id: string, leadGenerator: LeadGeneratorInterface) => {
  const response = await axios.put(`/api/lead-generators/${id}`, leadGenerator);
  return response.data;
};

export const getLeadGeneratorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/lead-generators/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLeadGeneratorById = async (id: string) => {
  const response = await axios.delete(`/api/lead-generators/${id}`);
  return response.data;
};
