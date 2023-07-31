import * as yup from 'yup';

export const socialMediaManagerValidationSchema = yup.object().shape({
  startup_id: yup.string().nullable(),
});
