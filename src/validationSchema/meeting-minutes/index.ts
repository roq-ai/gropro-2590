import * as yup from 'yup';

export const meetingMinutesValidationSchema = yup.object().shape({
  startup_id: yup.string().nullable(),
});
