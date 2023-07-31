import * as yup from 'yup';

export const websiteDeveloperValidationSchema = yup.object().shape({
  startup_id: yup.string().nullable(),
});
