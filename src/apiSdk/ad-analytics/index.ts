import axios from 'axios';
import queryString from 'query-string';
import { AdAnalyticsInterface, AdAnalyticsGetQueryInterface } from 'interfaces/ad-analytics';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAdAnalytics = async (
  query?: AdAnalyticsGetQueryInterface,
): Promise<PaginatedInterface<AdAnalyticsInterface>> => {
  const response = await axios.get('/api/ad-analytics', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAdAnalytics = async (adAnalytics: AdAnalyticsInterface) => {
  const response = await axios.post('/api/ad-analytics', adAnalytics);
  return response.data;
};

export const updateAdAnalyticsById = async (id: string, adAnalytics: AdAnalyticsInterface) => {
  const response = await axios.put(`/api/ad-analytics/${id}`, adAnalytics);
  return response.data;
};

export const getAdAnalyticsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/ad-analytics/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAdAnalyticsById = async (id: string) => {
  const response = await axios.delete(`/api/ad-analytics/${id}`);
  return response.data;
};
