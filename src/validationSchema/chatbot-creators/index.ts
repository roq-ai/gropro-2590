import * as yup from 'yup';

export const chatbotCreatorValidationSchema = yup.object().shape({
  startup_id: yup.string().nullable(),
});
