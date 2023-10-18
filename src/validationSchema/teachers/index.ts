import * as yup from 'yup';

export const teacherValidationSchema = yup.object().shape({
  name: yup.string().required(),
  subject: yup.string().nullable(),
  hire_date: yup.date().nullable(),
  termination_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
