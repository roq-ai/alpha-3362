import { AssignmentInterface } from 'interfaces/assignment';
import { EnrollmentInterface } from 'interfaces/enrollment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  description?: string;
  grade_level?: number;
  enrollment_date?: any;
  graduation_date?: any;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  assignment?: AssignmentInterface[];
  enrollment?: EnrollmentInterface[];
  user?: UserInterface;
  _count?: {
    assignment?: number;
    enrollment?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
