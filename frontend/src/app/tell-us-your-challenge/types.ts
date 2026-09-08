export type CoreRequirementId = 
  | "modernize" 
  | "automate" 
  | "new_machine" 
  | "complete_system" 
  | "iot" 
  | "product" 
  | "amc" 
  | "consultation";

export interface ChallengeFormData {
  // Step 1
  coreRequirements: CoreRequirementId[];
  
  // Step 2 basic
  currentSituation: string;
  desiredOutcome: string;
  industry: string;
  location: string;
  urgency: string;

  // Conditional Answers
  mod_machineType: string;
  mod_problem: string;
  mod_isOperating: string;

  auto_process: string;
  auto_currentState: string;
  auto_expectedImprovement: string;

  new_whatShouldItDo: string;
  new_material: string;
  new_hasConcept: string;

  sys_type: string;
  sys_capabilities: string[];

  iot_whatToMonitor: string[];
  iot_howToAccess: string[];

  prod_description: string;
  prod_stage: string;

  amc_whatRequiresSupport: string[];
  amc_whoDeveloped: string;
  amc_preferredArrangement: string;

  // Step 3
  eq_makeModel: string;
  eq_supplierInfo: string;
  eq_estimatedQuantity: string;

  // Step 4
  name: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
  preferredContactMethod: string;
  preferredContactTime: string;

  // Step 5
  consentAccurate: boolean;
  consentNoObligation: boolean;
}
