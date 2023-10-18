import * as yup from 'yup';

export const enrollmentValidationSchema = yup.object().shape({
  enrollment_date: yup.date().nullable(),
  completion_date: yup.date().nullable(),
  grade: yup.number().integer().nullable(),
  student_id: yup.string().nullable().required(),
  course_id: yup.string().nullable().required(),
});
