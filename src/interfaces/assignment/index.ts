import { CourseInterface } from 'interfaces/course';
import { StudentInterface } from 'interfaces/student';
import { GetQueryInterface } from 'interfaces';

export interface AssignmentInterface {
  id?: string;
  name: string;
  description?: string;
  due_date?: any;
  course_id: string;
  student_id: string;
  grade?: number;
  created_at?: any;
  updated_at?: any;

  course?: CourseInterface;
  student?: StudentInterface;
  _count?: {};
}

export interface AssignmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  course_id?: string;
  student_id?: string;
}
