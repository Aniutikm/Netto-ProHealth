import { Component } from '@angular/core';
import { PricingPlan, PricingPlanOptionType } from '../../shared/models/pricing-plans.models';

@Component({
  selector: 'app-pricing-plans',
  templateUrl: './pricing-plans.component.html',
  styleUrls: ['./pricing-plans.component.css']
})
export class PricingPlansComponent {
  protected readonly plans: PricingPlan[] = [{
    title: 'Basic',
    description: 'Best for personal use',
    selectedOptions: new Set([PricingPlanOptionType.IntuitiveDashboard,
      PricingPlanOptionType.EmployeeManagement, PricingPlanOptionType.ScheduleManagement]),
    trialInfo: 'Free 1 month trial',
    imageSrc: 'basic',
  },
    {
      title: 'Advanced',
      description: 'For large team',
      selectedOptions: new Set([PricingPlanOptionType.IntuitiveDashboard,
        PricingPlanOptionType.EmployeeManagement, PricingPlanOptionType.ScheduleManagement,
        PricingPlanOptionType.PatientScheduling, PricingPlanOptionType.PatientHistoryTracking
]),
      trialInfo: 'Free 1 month trial',
      imageSrc: 'advanced',
    },
    {
      title: 'Premium',
      description: 'Best for Business owners',
      selectedOptions: new Set([PricingPlanOptionType.IntuitiveDashboard,
        PricingPlanOptionType.EmployeeManagement, PricingPlanOptionType.ScheduleManagement,
        PricingPlanOptionType.PatientScheduling, PricingPlanOptionType.PatientHistoryTracking,
        PricingPlanOptionType.HealthcareAnalytics]),
      trialInfo: 'Free 1 month trial',
      imageSrc: 'premium',
    }]
}
