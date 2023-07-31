import axios from 'axios';
import queryString from 'query-string';
import { SocialMediaManagerInterface, SocialMediaManagerGetQueryInterface } from 'interfaces/social-media-manager';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSocialMediaManagers = async (
  query?: SocialMediaManagerGetQueryInterface,
): Promise<PaginatedInterface<SocialMediaManagerInterface>> => {
  const response = await axios.get('/api/social-media-managers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSocialMediaManager = async (socialMediaManager: SocialMediaManagerInterface) => {
  const response = await axios.post('/api/social-media-managers', socialMediaManager);
  return response.data;
};

export const updateSocialMediaManagerById = async (id: string, socialMediaManager: SocialMediaManagerInterface) => {
  const response = await axios.put(`/api/social-media-managers/${id}`, socialMediaManager);
  return response.data;
};

export const getSocialMediaManagerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/social-media-managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteSocialMediaManagerById = async (id: string) => {
  const response = await axios.delete(`/api/social-media-managers/${id}`);
  return response.data;
};
