const fs = require('fs');
const path = require('path');

const components = {
  'equipment-details': {
    "collectionName": "components_challenge_equipment_details",
    "info": { "displayName": "equipmentDetails", "icon": "cog" },
    "options": {},
    "attributes": {
      "eq_makeModel": { "type": "string" },
      "eq_supplierInfo": { "type": "string" },
      "eq_estimatedQuantity": { "type": "string" }
    }
  },
  'contact-details': {
    "collectionName": "components_challenge_contact_details",
    "info": { "displayName": "contactDetails", "icon": "user" },
    "options": {},
    "attributes": {
      "name": { "type": "string" },
      "company": { "type": "string" },
      "jobTitle": { "type": "string" },
      "email": { "type": "email" },
      "phone": { "type": "string" },
      "preferredContactMethod": { "type": "string" },
      "preferredContactTime": { "type": "string" }
    }
  },
  'consents': {
    "collectionName": "components_challenge_consents",
    "info": { "displayName": "consents", "icon": "check" },
    "options": {},
    "attributes": {
      "consentAccurate": { "type": "boolean" },
      "consentNoObligation": { "type": "boolean" }
    }
  },
  'modernization-details': {
    "collectionName": "components_challenge_modernization_details",
    "info": { "displayName": "modernizationDetails" },
    "options": {},
    "attributes": {
      "mod_machineType": { "type": "string" },
      "mod_problem": { "type": "string" },
      "mod_isOperating": { "type": "string" }
    }
  },
  'automation-details': {
    "collectionName": "components_challenge_automation_details",
    "info": { "displayName": "automationDetails" },
    "options": {},
    "attributes": {
      "auto_process": { "type": "string" },
      "auto_currentState": { "type": "string" },
      "auto_expectedImprovement": { "type": "string" }
    }
  },
  'new-machine-details': {
    "collectionName": "components_challenge_new_machine_details",
    "info": { "displayName": "newMachineDetails" },
    "options": {},
    "attributes": {
      "new_whatShouldItDo": { "type": "string" },
      "new_material": { "type": "string" },
      "new_hasConcept": { "type": "string" }
    }
  },
  'complete-system-details': {
    "collectionName": "components_challenge_complete_system_details",
    "info": { "displayName": "completeSystemDetails" },
    "options": {},
    "attributes": {
      "sys_type": { "type": "string" },
      "sys_capabilities": { "type": "json" }
    }
  },
  'iot-details': {
    "collectionName": "components_challenge_iot_details",
    "info": { "displayName": "iotDetails" },
    "options": {},
    "attributes": {
      "iot_whatToMonitor": { "type": "json" },
      "iot_howToAccess": { "type": "json" }
    }
  },
  'product-details': {
    "collectionName": "components_challenge_product_details",
    "info": { "displayName": "productDetails" },
    "options": {},
    "attributes": {
      "prod_description": { "type": "text" },
      "prod_stage": { "type": "string" }
    }
  },
  'amc-details': {
    "collectionName": "components_challenge_amc_details",
    "info": { "displayName": "amcDetails" },
    "options": {},
    "attributes": {
      "amc_whatRequiresSupport": { "type": "json" },
      "amc_whoDeveloped": { "type": "string" },
      "amc_preferredArrangement": { "type": "string" }
    }
  }
};

const componentsDir = path.join(__dirname, 'src', 'components', 'challenge');
fs.mkdirSync(componentsDir, { recursive: true });

for (const [name, schema] of Object.entries(components)) {
  fs.writeFileSync(path.join(componentsDir, `${name}.json`), JSON.stringify(schema, null, 2));
}

const ctDir = path.join(__dirname, 'src', 'api', 'challenge-enquiry', 'content-types', 'challenge-enquiry');
fs.mkdirSync(ctDir, { recursive: true });

const ctSchema = {
  "kind": "collectionType",
  "collectionName": "challenge_enquiries",
  "info": {
    "singularName": "challenge-enquiry",
    "pluralName": "challenge-enquiries",
    "displayName": "Challenge Enquiry",
    "description": ""
  },
  "options": {
    "draftAndPublish": false
  },
  "pluginOptions": {},
  "attributes": {
    "referenceNumber": { "type": "string", "required": true, "unique": true },
    "enquiryStatus": { "type": "enumeration", "enum": ["submitted", "reviewing", "contacted", "closed"], "default": "submitted" },
    "coreRequirements": { "type": "json" },
    "currentSituation": { "type": "text", "required": true },
    "desiredOutcome": { "type": "text", "required": true },
    "industry": { "type": "string" },
    "location": { "type": "string" },
    "urgency": { "type": "string" },
    "priorityFlag": { "type": "boolean" },
    "priorityReasons": { "type": "json" },
    "internalRouting": { "type": "json" },
    "supportingFiles": { "type": "media", "multiple": true, "allowedTypes": ["images", "files", "videos"] },
    
    "equipmentDetails": { "type": "component", "repeatable": false, "component": "challenge.equipment-details" },
    "contactDetails": { "type": "component", "repeatable": false, "component": "challenge.contact-details" },
    "consents": { "type": "component", "repeatable": false, "component": "challenge.consents" },
    
    "modernizationDetails": { "type": "component", "repeatable": false, "component": "challenge.modernization-details" },
    "automationDetails": { "type": "component", "repeatable": false, "component": "challenge.automation-details" },
    "newMachineDetails": { "type": "component", "repeatable": false, "component": "challenge.new-machine-details" },
    "completeSystemDetails": { "type": "component", "repeatable": false, "component": "challenge.complete-system-details" },
    "iotDetails": { "type": "component", "repeatable": false, "component": "challenge.iot-details" },
    "productDetails": { "type": "component", "repeatable": false, "component": "challenge.product-details" },
    "amcDetails": { "type": "component", "repeatable": false, "component": "challenge.amc-details" }
  }
};

fs.writeFileSync(path.join(ctDir, `schema.json`), JSON.stringify(ctSchema, null, 2));

console.log('Schemas created.');
