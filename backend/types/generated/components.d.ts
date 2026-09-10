import type { Schema, Struct } from '@strapi/strapi';

export interface ChallengeAmcDetails extends Struct.ComponentSchema {
  collectionName: 'components_challenge_amc_details';
  info: {
    displayName: 'amcDetails';
  };
  attributes: {
    amc_preferredArrangement: Schema.Attribute.String;
    amc_whatRequiresSupport: Schema.Attribute.JSON;
    amc_whoDeveloped: Schema.Attribute.String;
  };
}

export interface ChallengeAutomationDetails extends Struct.ComponentSchema {
  collectionName: 'components_challenge_automation_details';
  info: {
    displayName: 'automationDetails';
  };
  attributes: {
    auto_currentState: Schema.Attribute.String;
    auto_expectedImprovement: Schema.Attribute.String;
    auto_process: Schema.Attribute.String;
  };
}

export interface ChallengeCompleteSystemDetails extends Struct.ComponentSchema {
  collectionName: 'components_challenge_complete_system_details';
  info: {
    displayName: 'completeSystemDetails';
  };
  attributes: {
    sys_capabilities: Schema.Attribute.JSON;
    sys_type: Schema.Attribute.String;
  };
}

export interface ChallengeConsents extends Struct.ComponentSchema {
  collectionName: 'components_challenge_consents';
  info: {
    displayName: 'consents';
    icon: 'check';
  };
  attributes: {
    consentAccurate: Schema.Attribute.Boolean;
    consentNoObligation: Schema.Attribute.Boolean;
  };
}

export interface ChallengeContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_challenge_contact_details';
  info: {
    displayName: 'contactDetails';
    icon: 'user';
  };
  attributes: {
    company: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    jobTitle: Schema.Attribute.String;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    preferredContactMethod: Schema.Attribute.String;
    preferredContactTime: Schema.Attribute.String;
  };
}

export interface ChallengeEquipmentDetails extends Struct.ComponentSchema {
  collectionName: 'components_challenge_equipment_details';
  info: {
    displayName: 'equipmentDetails';
    icon: 'cog';
  };
  attributes: {
    eq_estimatedQuantity: Schema.Attribute.String;
    eq_makeModel: Schema.Attribute.String;
    eq_supplierInfo: Schema.Attribute.String;
  };
}

export interface ChallengeIotDetails extends Struct.ComponentSchema {
  collectionName: 'components_challenge_iot_details';
  info: {
    displayName: 'iotDetails';
  };
  attributes: {
    iot_howToAccess: Schema.Attribute.JSON;
    iot_whatToMonitor: Schema.Attribute.JSON;
  };
}

export interface ChallengeModernizationDetails extends Struct.ComponentSchema {
  collectionName: 'components_challenge_modernization_details';
  info: {
    displayName: 'modernizationDetails';
  };
  attributes: {
    mod_isOperating: Schema.Attribute.String;
    mod_machineType: Schema.Attribute.String;
    mod_problem: Schema.Attribute.String;
  };
}

export interface ChallengeNewMachineDetails extends Struct.ComponentSchema {
  collectionName: 'components_challenge_new_machine_details';
  info: {
    displayName: 'newMachineDetails';
  };
  attributes: {
    new_hasConcept: Schema.Attribute.String;
    new_material: Schema.Attribute.String;
    new_whatShouldItDo: Schema.Attribute.String;
  };
}

export interface ChallengeProductDetails extends Struct.ComponentSchema {
  collectionName: 'components_challenge_product_details';
  info: {
    displayName: 'productDetails';
  };
  attributes: {
    prod_description: Schema.Attribute.Text;
    prod_stage: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'challenge.amc-details': ChallengeAmcDetails;
      'challenge.automation-details': ChallengeAutomationDetails;
      'challenge.complete-system-details': ChallengeCompleteSystemDetails;
      'challenge.consents': ChallengeConsents;
      'challenge.contact-details': ChallengeContactDetails;
      'challenge.equipment-details': ChallengeEquipmentDetails;
      'challenge.iot-details': ChallengeIotDetails;
      'challenge.modernization-details': ChallengeModernizationDetails;
      'challenge.new-machine-details': ChallengeNewMachineDetails;
      'challenge.product-details': ChallengeProductDetails;
    }
  }
}
