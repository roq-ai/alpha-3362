import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  grade_level: yup.number().integer().nullable(),
  enrollment_date: yup.date().nullable(),
  graduation_date: yup.date().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
