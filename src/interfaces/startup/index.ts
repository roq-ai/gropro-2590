import { AdAnalyticsInterface } from 'interfaces/ad-analytics';
import { BusinessAdvisorInterface } from 'interfaces/business-advisor';
import { ChatbotCreatorInterface } from 'interfaces/chatbot-creator';
import { CrmInterface } from 'interfaces/crm';
import { FormGeneratorInterface } from 'interfaces/form-generator';
import { LeadGeneratorInterface } from 'interfaces/lead-generator';
import { MeetingMinutesInterface } from 'interfaces/meeting-minutes';
import { NoteTakingInterface } from 'interfaces/note-taking';
import { SocialMediaManagerInterface } from 'interfaces/social-media-manager';
import { WebsiteDeveloperInterface } from 'interfaces/website-developer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StartupInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  ad_analytics?: AdAnalyticsInterface[];
  business_advisor?: BusinessAdvisorInterface[];
  chatbot_creator?: ChatbotCreatorInterface[];
  crm?: CrmInterface[];
  form_generator?: FormGeneratorInterface[];
  lead_generator?: LeadGeneratorInterface[];
  meeting_minutes?: MeetingMinutesInterface[];
  note_taking?: NoteTakingInterface[];
  social_media_manager?: SocialMediaManagerInterface[];
  website_developer?: WebsiteDeveloperInterface[];
  user?: UserInterface;
  _count?: {
    ad_analytics?: number;
    business_advisor?: number;
    chatbot_creator?: number;
    crm?: number;
    form_generator?: number;
    lead_generator?: number;
    meeting_minutes?: number;
    note_taking?: number;
    social_media_manager?: number;
    website_developer?: number;
  };
}

export interface StartupGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
