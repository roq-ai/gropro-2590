import { StartupInterface } from 'interfaces/startup';
import { GetQueryInterface } from 'interfaces';

export interface CrmInterface {
  id?: string;
  startup_id?: string;
  created_at?: any;
  updated_at?: any;

  startup?: StartupInterface;
  _count?: {};
}

export interface CrmGetQueryInterface extends GetQueryInterface {
  id?: string;
  startup_id?: string;
}
