import * as yup from 'yup';

export const leadGeneratorValidationSchema = yup.object().shape({
  startup_id: yup.string().nullable(),
});
