interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Marketing Specialist'],
  tenantName: 'Startup',
  applicationName: 'GroPro',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
