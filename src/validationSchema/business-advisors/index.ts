import * as yup from 'yup';

export const businessAdvisorValidationSchema = yup.object().shape({
  startup_id: yup.string().nullable(),
});
