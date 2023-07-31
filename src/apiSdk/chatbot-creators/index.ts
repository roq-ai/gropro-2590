import axios from 'axios';
import queryString from 'query-string';
import { ChatbotCreatorInterface, ChatbotCreatorGetQueryInterface } from 'interfaces/chatbot-creator';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getChatbotCreators = async (
  query?: ChatbotCreatorGetQueryInterface,
): Promise<PaginatedInterface<ChatbotCreatorInterface>> => {
  const response = await axios.get('/api/chatbot-creators', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createChatbotCreator = async (chatbotCreator: ChatbotCreatorInterface) => {
  const response = await axios.post('/api/chatbot-creators', chatbotCreator);
  return response.data;
};

export const updateChatbotCreatorById = async (id: string, chatbotCreator: ChatbotCreatorInterface) => {
  const response = await axios.put(`/api/chatbot-creators/${id}`, chatbotCreator);
  return response.data;
};

export const getChatbotCreatorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/chatbot-creators/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteChatbotCreatorById = async (id: string) => {
  const response = await axios.delete(`/api/chatbot-creators/${id}`);
  return response.data;
};
