const mapping: Record<string, string> = {
  'ad-analytics': 'ad_analytics',
  'business-advisors': 'business_advisor',
  'chatbot-creators': 'chatbot_creator',
  crms: 'crm',
  'form-generators': 'form_generator',
  'lead-generators': 'lead_generator',
  'meeting-minutes': 'meeting_minutes',
  'note-takings': 'note_taking',
  'social-media-managers': 'social_media_manager',
  startups: 'startup',
  users: 'user',
  'website-developers': 'website_developer',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
