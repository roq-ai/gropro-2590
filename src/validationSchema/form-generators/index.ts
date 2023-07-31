import * as yup from 'yup';

export const formGeneratorValidationSchema = yup.object().shape({
  startup_id: yup.string().nullable(),
});
