import axios from 'axios';
import queryString from 'query-string';
import { MeetingMinutesInterface, MeetingMinutesGetQueryInterface } from 'interfaces/meeting-minutes';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMeetingMinutes = async (
  query?: MeetingMinutesGetQueryInterface,
): Promise<PaginatedInterface<MeetingMinutesInterface>> => {
  const response = await axios.get('/api/meeting-minutes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMeetingMinutes = async (meetingMinutes: MeetingMinutesInterface) => {
  const response = await axios.post('/api/meeting-minutes', meetingMinutes);
  return response.data;
};

export const updateMeetingMinutesById = async (id: string, meetingMinutes: MeetingMinutesInterface) => {
  const response = await axios.put(`/api/meeting-minutes/${id}`, meetingMinutes);
  return response.data;
};

export const getMeetingMinutesById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/meeting-minutes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMeetingMinutesById = async (id: string) => {
  const response = await axios.delete(`/api/meeting-minutes/${id}`);
  return response.data;
};
