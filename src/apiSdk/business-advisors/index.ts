import axios from 'axios';
import queryString from 'query-string';
import { BusinessAdvisorInterface, BusinessAdvisorGetQueryInterface } from 'interfaces/business-advisor';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBusinessAdvisors = async (
  query?: BusinessAdvisorGetQueryInterface,
): Promise<PaginatedInterface<BusinessAdvisorInterface>> => {
  const response = await axios.get('/api/business-advisors', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBusinessAdvisor = async (businessAdvisor: BusinessAdvisorInterface) => {
  const response = await axios.post('/api/business-advisors', businessAdvisor);
  return response.data;
};

export const updateBusinessAdvisorById = async (id: string, businessAdvisor: BusinessAdvisorInterface) => {
  const response = await axios.put(`/api/business-advisors/${id}`, businessAdvisor);
  return response.data;
};

export const getBusinessAdvisorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/business-advisors/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBusinessAdvisorById = async (id: string) => {
  const response = await axios.delete(`/api/business-advisors/${id}`);
  return response.data;
};
