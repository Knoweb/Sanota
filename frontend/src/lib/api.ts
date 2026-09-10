import { ChallengeFormData } from "@/app/tell-us-your-challenge/types";

export interface SubmitChallengeResponse {
  success: boolean;
  referenceNumber: string;
  message: string;
}

export async function submitChallengeEnquiry(data: ChallengeFormData): Promise<SubmitChallengeResponse> {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/challenge-enquiries/submit`;

  const payload = {
    coreRequirements: data.coreRequirements,
    currentSituation: data.currentSituation,
    desiredOutcome: data.desiredOutcome,
    industry: data.industry,
    location: data.location,
    urgency: data.urgency,
    equipmentDetails: {
      eq_makeModel: data.eq_makeModel,
      eq_supplierInfo: data.eq_supplierInfo,
      eq_estimatedQuantity: data.eq_estimatedQuantity,
    },
    contactDetails: {
      name: data.name,
      company: data.company,
      jobTitle: data.jobTitle,
      email: data.email,
      phone: data.phone,
      preferredContactMethod: data.preferredContactMethod,
      preferredContactTime: data.preferredContactTime,
    },
    consents: {
      consentAccurate: data.consentAccurate,
      consentNoObligation: data.consentNoObligation,
    }
  } as any;

  if (data.coreRequirements.includes('modernize')) {
    payload.modernizationDetails = {
      mod_machineType: data.mod_machineType,
      mod_problem: data.mod_problem,
      mod_isOperating: data.mod_isOperating,
    };
  }
  if (data.coreRequirements.includes('automate')) {
    payload.automationDetails = {
      auto_process: data.auto_process,
      auto_currentState: data.auto_currentState,
      auto_expectedImprovement: data.auto_expectedImprovement,
    };
  }
  if (data.coreRequirements.includes('new_machine')) {
    payload.newMachineDetails = {
      new_whatShouldItDo: data.new_whatShouldItDo,
      new_material: data.new_material,
      new_hasConcept: data.new_hasConcept,
    };
  }
  if (data.coreRequirements.includes('complete_system')) {
    payload.completeSystemDetails = {
      sys_type: data.sys_type,
      sys_capabilities: data.sys_capabilities,
    };
  }
  if (data.coreRequirements.includes('iot')) {
    payload.iotDetails = {
      iot_whatToMonitor: data.iot_whatToMonitor,
      iot_howToAccess: data.iot_howToAccess,
    };
  }
  if (data.coreRequirements.includes('product')) {
    payload.productDetails = {
      prod_description: data.prod_description,
      prod_stage: data.prod_stage,
    };
  }
  if (data.coreRequirements.includes('amc')) {
    payload.amcDetails = {
      amc_whatRequiresSupport: data.amc_whatRequiresSupport,
      amc_whoDeveloped: data.amc_whoDeveloped,
      amc_preferredArrangement: data.amc_preferredArrangement,
    };
  }

  const formData = new FormData();
  formData.append('data', JSON.stringify(payload));

  if (data.supportingFiles && data.supportingFiles.length > 0) {
    data.supportingFiles.forEach((file) => {
      formData.append('files.supportingFiles', file);
    });
  }

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    let errorMsg = 'Your enquiry could not be submitted because of a connection problem. Please try again.';
    try {
      const errJson = await response.json();
      if (errJson?.error?.message) {
        errorMsg = errJson.error.message;
      }
    } catch(e) {}
    throw new Error(errorMsg);
  }

  return await response.json();
}
