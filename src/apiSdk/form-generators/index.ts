import axios from 'axios';
import queryString from 'query-string';
import { FormGeneratorInterface, FormGeneratorGetQueryInterface } from 'interfaces/form-generator';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFormGenerators = async (
  query?: FormGeneratorGetQueryInterface,
): Promise<PaginatedInterface<FormGeneratorInterface>> => {
  const response = await axios.get('/api/form-generators', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createFormGenerator = async (formGenerator: FormGeneratorInterface) => {
  const response = await axios.post('/api/form-generators', formGenerator);
  return response.data;
};

export const updateFormGeneratorById = async (id: string, formGenerator: FormGeneratorInterface) => {
  const response = await axios.put(`/api/form-generators/${id}`, formGenerator);
  return response.data;
};

export const getFormGeneratorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/form-generators/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFormGeneratorById = async (id: string) => {
  const response = await axios.delete(`/api/form-generators/${id}`);
  return response.data;
};
