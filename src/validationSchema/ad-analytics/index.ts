import * as yup from 'yup';

export const adAnalyticsValidationSchema = yup.object().shape({
  startup_id: yup.string().nullable(),
});
