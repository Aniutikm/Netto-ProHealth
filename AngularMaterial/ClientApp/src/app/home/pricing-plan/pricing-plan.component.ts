import { Component, Input } from '@angular/core';
import { PricingPlan, PricingPlanOption, PricingPlanOptionType  } from '../../shared/models/pricing-plans.models';


@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.css']
})
export class PricingPlanComponent {
  @Input() public plan!: PricingPlan;
  protected readonly options: PricingPlanOption[] = [{
    name: 'Intuitive dashboard',
    value: PricingPlanOptionType.IntuitiveDashboard
  },
    {
      name: 'Employee Management',
      value: PricingPlanOptionType.EmployeeManagement
    },
    {
      name: 'Schedule management',
      value: PricingPlanOptionType.ScheduleManagement
    },
    {
      name: 'Patient Scheduling',
      value: PricingPlanOptionType.PatientScheduling
    },
    {
      name: 'Patient history tracking',
      value: PricingPlanOptionType.PatientHistoryTracking
    },

    {
      name: 'Healthcare Analytics',
      value: PricingPlanOptionType.HealthcareAnalytics
    }];

  protected isOptionUnSelected(option: PricingPlanOption): boolean {
    return !this.plan.selectedOptions.has(option.value);
  }
}

