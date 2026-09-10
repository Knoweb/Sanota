import { factories } from '@strapi/strapi';
import crypto from 'crypto';

export default factories.createCoreController('api::challenge-enquiry.challenge-enquiry', ({ strapi }) => ({
  async submit(ctx) {
    try {
      const body = ctx.request.body || {};
      const files = ctx.request.files;

      let data = body;
      if (typeof body.data === 'string') {
        try {
          data = JSON.parse(body.data);
        } catch(e) {
          return ctx.badRequest('Invalid JSON payload in data field');
        }
      } else if (body.data) {
        data = body.data;
      }

      if (!data.coreRequirements || !Array.isArray(data.coreRequirements) || data.coreRequirements.length === 0) {
        return ctx.badRequest('coreRequirements must contain at least one valid option');
      }

      const validOptions = ["modernize", "automate", "new_machine", "complete_system", "iot", "product", "amc", "consultation"];
      for (const req of data.coreRequirements) {
        if (!validOptions.includes(req)) {
          return ctx.badRequest('Unknown requirement ID');
        }
      }

      if (!data.currentSituation) return ctx.badRequest('currentSituation is required');
      if (!data.desiredOutcome) return ctx.badRequest('desiredOutcome is required');
      if (!data.contactDetails || !data.contactDetails.name) return ctx.badRequest('name is required');
      
      const email = data.contactDetails.email || '';
      const phone = data.contactDetails.phone || '';
      if (!email.trim() && !phone.trim()) {
        return ctx.badRequest('email OR phone is required');
      }

      if (email.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return ctx.badRequest('Invalid email format');
        }
      }

      if (phone.trim()) {
        const phoneRegex = /^\+?[\d\s\-\(\)]{7,20}$/;
        if (!phoneRegex.test(phone)) {
          return ctx.badRequest('Invalid phone format');
        }
      }

      if (!data.consents || data.consents.consentAccurate !== true || data.consents.consentNoObligation !== true) {
        return ctx.badRequest('Both consent values must be true');
      }

      const validRequirements = data.coreRequirements;
      
      const payload: any = {
        coreRequirements: validRequirements,
        currentSituation: data.currentSituation,
        desiredOutcome: data.desiredOutcome,
        industry: data.industry,
        location: data.location,
        urgency: data.urgency,
        equipmentDetails: data.equipmentDetails,
        contactDetails: data.contactDetails,
        consents: data.consents,
        enquiryStatus: 'submitted'
      };

      if (validRequirements.includes('modernize')) {
        payload.modernizationDetails = data.modernizationDetails;
      }
      if (validRequirements.includes('automate')) {
        payload.automationDetails = data.automationDetails;
      }
      if (validRequirements.includes('new_machine')) {
        payload.newMachineDetails = data.newMachineDetails;
      }
      if (validRequirements.includes('complete_system')) {
        payload.completeSystemDetails = data.completeSystemDetails;
      }
      if (validRequirements.includes('iot')) {
        payload.iotDetails = data.iotDetails;
      }
      if (validRequirements.includes('product')) {
        payload.productDetails = data.productDetails;
      }
      if (validRequirements.includes('amc')) {
        payload.amcDetails = data.amcDetails;
      }

      let uploadedFileIds = [];
      if (files && files['files.supportingFiles']) {
        let uploadedFiles = files['files.supportingFiles'];
        if (!Array.isArray(uploadedFiles)) {
          uploadedFiles = [uploadedFiles];
        }

        const allowedMimeTypes = [
          'image/jpeg', 'image/png', 'application/pdf', 
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'video/mp4'
        ];

        for (const file of uploadedFiles) {
          if (!allowedMimeTypes.includes(file.mimetype as string)) {
            return ctx.badRequest(`File type not allowed: ${file.mimetype}`);
          }
        }
        
        const uploadService = strapi.plugin('upload').service('upload');
        const uploaded = await uploadService.upload({
          data: {},
          files: uploadedFiles,
        });

        uploadedFileIds = uploaded.map((file: any) => file.id);
        payload.supportingFiles = uploadedFileIds;
      }

      const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      let referenceNumber = '';
      let isUnique = false;
      let attempts = 0;

      while (!isUnique && attempts < 5) {
        const suffix = crypto.randomBytes(3).toString('hex').toUpperCase();
        referenceNumber = `SAN-${dateStr}-${suffix}`;
        
        const existing = await strapi.documents('api::challenge-enquiry.challenge-enquiry').findFirst({
          filters: { referenceNumber }
        });
        
        if (!existing) {
          isUnique = true;
        }
        attempts++;
      }

      if (!isUnique) {
        return ctx.internalServerError('Failed to generate unique reference number');
      }

      payload.referenceNumber = referenceNumber;

      const routes = new Set<string>();
      const supportingTeams = new Set<string>();

      validRequirements.forEach((req: string) => {
        switch (req) {
          case 'modernize':
            routes.add('Retrofit, Refurbishment & Modernization');
            ['Mechanical', 'Electrical', 'Automation', 'AMC'].forEach(t => supportingTeams.add(t));
            break;
          case 'automate':
            routes.add('Automation, IoT & Digital Integration');
            ['Automation', 'Controls', 'Software', 'Project Execution'].forEach(t => supportingTeams.add(t));
            break;
          case 'new_machine':
            routes.add('Custom Machinery & Product Development');
            ['Design', 'Mechanical', 'Electrical', 'Fabrication'].forEach(t => supportingTeams.add(t));
            break;
          case 'complete_system':
            routes.add('Project Execution, Installation & Commissioning');
            supportingTeams.add('Multi-disciplinary project team');
            break;
          case 'iot':
            routes.add('Automation, IoT & Digital Integration');
            ['Sanota Engineering', 'Knoweb'].forEach(t => supportingTeams.add(t));
            break;
          case 'product':
            routes.add('System & Product Design');
            ['Engineering', 'R&D', 'Knoweb where required'].forEach(t => supportingTeams.add(t));
            break;
          case 'amc':
            routes.add('AMC, Maintenance & Lifecycle Support');
            supportingTeams.add('Service and relevant technical specialists');
            break;
          case 'consultation':
            routes.add('Engineering Consultation & Problem Analysis');
            supportingTeams.add('Technical review coordinator');
            break;
        }
      });

      payload.internalRouting = {
        primaryRoutes: Array.from(routes),
        supportingTeams: Array.from(supportingTeams)
      };

      let priorityFlag = false;
      const priorityReasons = [];

      if (data.urgency === 'Immediate operational issue') {
        priorityFlag = true;
        priorityReasons.push('Urgency: Immediate operational issue');
      }

      if (payload.modernizationDetails && payload.modernizationDetails.mod_problem === 'Safety concerns') {
        priorityFlag = true;
        priorityReasons.push('Modernization: Safety concerns');
      }

      if (payload.modernizationDetails && payload.modernizationDetails.mod_isOperating === 'No') {
        priorityFlag = true;
        priorityReasons.push('Modernization: Machine not operating');
      }

      if (payload.amcDetails && payload.amcDetails.amc_preferredArrangement === 'Breakdown support') {
        priorityFlag = true;
        priorityReasons.push('AMC: Breakdown support');
      }

      payload.priorityFlag = priorityFlag;
      payload.priorityReasons = priorityReasons;

      const entry = await strapi.documents('api::challenge-enquiry.challenge-enquiry').create({
        data: payload
      });

      return ctx.send({
        success: true,
        referenceNumber: entry.referenceNumber,
        message: 'Your enquiry has been submitted successfully.'
      });

    } catch (err: any) {
      strapi.log.error('Submission error:', err);
      return ctx.internalServerError('An error occurred during submission');
    }
  }
}));
