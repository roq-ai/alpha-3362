import { AssignmentInterface } from 'interfaces/assignment';
import { EnrollmentInterface } from 'interfaces/enrollment';
import { TeacherInterface } from 'interfaces/teacher';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  description?: string;
  start_date?: any;
  end_date?: any;
  teacher_id: string;
  created_at?: any;
  updated_at?: any;
  assignment?: AssignmentInterface[];
  enrollment?: EnrollmentInterface[];
  teacher?: TeacherInterface;
  _count?: {
    assignment?: number;
    enrollment?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  teacher_id?: string;
}
