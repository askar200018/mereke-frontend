import { Roles } from './role.enum';

export interface User {
  mail: string;
  role: Roles;
}
