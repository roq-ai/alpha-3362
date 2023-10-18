interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Student'],
  customerRoles: [],
  tenantRoles: ['Student'],
  tenantName: 'Student',
  applicationName: 'Alpha',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Read own student information',
    'Read course and assignment information',
    'Edit own student information',
    'Manage own enrollments',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/17c0e4d0-d788-4af7-95e7-071d806acaa8',
};
