import axios from 'axios';
import queryString from 'query-string';
import { CrmInterface, CrmGetQueryInterface } from 'interfaces/crm';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCrms = async (query?: CrmGetQueryInterface): Promise<PaginatedInterface<CrmInterface>> => {
  const response = await axios.get('/api/crms', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCrm = async (crm: CrmInterface) => {
  const response = await axios.post('/api/crms', crm);
  return response.data;
};

export const updateCrmById = async (id: string, crm: CrmInterface) => {
  const response = await axios.put(`/api/crms/${id}`, crm);
  return response.data;
};

export const getCrmById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/crms/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCrmById = async (id: string) => {
  const response = await axios.delete(`/api/crms/${id}`);
  return response.data;
};
