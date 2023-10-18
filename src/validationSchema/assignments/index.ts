import * as yup from 'yup';

export const assignmentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  due_date: yup.date().nullable(),
  grade: yup.number().integer().nullable(),
  course_id: yup.string().nullable().required(),
  student_id: yup.string().nullable().required(),
});
