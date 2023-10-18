import { StudentInterface } from 'interfaces/student';
import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface EnrollmentInterface {
  id?: string;
  student_id: string;
  course_id: string;
  enrollment_date?: any;
  completion_date?: any;
  grade?: number;
  created_at?: any;
  updated_at?: any;

  student?: StudentInterface;
  course?: CourseInterface;
  _count?: {};
}

export interface EnrollmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  course_id?: string;
}
