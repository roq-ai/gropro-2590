import { StartupInterface } from 'interfaces/startup';
import { GetQueryInterface } from 'interfaces';

export interface BusinessAdvisorInterface {
  id?: string;
  startup_id?: string;
  created_at?: any;
  updated_at?: any;

  startup?: StartupInterface;
  _count?: {};
}

export interface BusinessAdvisorGetQueryInterface extends GetQueryInterface {
  id?: string;
  startup_id?: string;
}
