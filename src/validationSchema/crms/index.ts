import * as yup from 'yup';

export const crmValidationSchema = yup.object().shape({
  startup_id: yup.string().nullable(),
});
