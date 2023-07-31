import * as yup from 'yup';

export const noteTakingValidationSchema = yup.object().shape({
  startup_id: yup.string().nullable(),
});
