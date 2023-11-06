export interface PricingPlan {
  title: string;
  description: string;
  selectedOptions: Set<string>;
  trialInfo: string;
  imageSrc: string;
}
export interface PricingPlanOption {
  name: string;
  value: PricingPlanOptionType;
}
export enum PricingPlanOptionType {
  IntuitiveDashboard = 'IntuitiveDashboard',
  EmployeeManagement = 'EmployeeManagement',
  ScheduleManagement = 'ScheduleManagement',
  HealthcareAnalytics = 'HealthcareAnalytics',
  PatientScheduling = 'PatientScheduling',
  PatientHistoryTracking = 'PatientHistoryTracking'
}
