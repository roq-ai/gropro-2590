import { StartupInterface } from 'interfaces/startup';
import { GetQueryInterface } from 'interfaces';

export interface SocialMediaManagerInterface {
  id?: string;
  startup_id?: string;
  created_at?: any;
  updated_at?: any;

  startup?: StartupInterface;
  _count?: {};
}

export interface SocialMediaManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  startup_id?: string;
}
