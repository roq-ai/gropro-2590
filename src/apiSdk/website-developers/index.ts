import axios from 'axios';
import queryString from 'query-string';
import { WebsiteDeveloperInterface, WebsiteDeveloperGetQueryInterface } from 'interfaces/website-developer';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getWebsiteDevelopers = async (
  query?: WebsiteDeveloperGetQueryInterface,
): Promise<PaginatedInterface<WebsiteDeveloperInterface>> => {
  const response = await axios.get('/api/website-developers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createWebsiteDeveloper = async (websiteDeveloper: WebsiteDeveloperInterface) => {
  const response = await axios.post('/api/website-developers', websiteDeveloper);
  return response.data;
};

export const updateWebsiteDeveloperById = async (id: string, websiteDeveloper: WebsiteDeveloperInterface) => {
  const response = await axios.put(`/api/website-developers/${id}`, websiteDeveloper);
  return response.data;
};

export const getWebsiteDeveloperById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/website-developers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteWebsiteDeveloperById = async (id: string) => {
  const response = await axios.delete(`/api/website-developers/${id}`);
  return response.data;
};
