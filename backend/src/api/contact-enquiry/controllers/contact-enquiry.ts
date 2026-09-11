// @ts-nocheck
import { factories } from '@strapi/strapi';
import crypto from 'crypto';

export default factories.createCoreController('api::contact-enquiry.contact-enquiry', ({ strapi }) => ({
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

      const {
        name,
        company,
        jobTitle,
        country,
        email,
        phone,
        enquiryType,
        subject,
        message,
        preferredResponseMethod,
        preferredContactTime,
        consentAccurate,
        consentNoObligation
      } = data;

      if (!name || typeof name !== 'string' || !name.trim()) return ctx.badRequest('name is required');
      if (!company || typeof company !== 'string' || !company.trim()) return ctx.badRequest('company is required');
      if (!subject || typeof subject !== 'string' || !subject.trim()) return ctx.badRequest('subject is required');
      if (!message || typeof message !== 'string' || !message.trim()) return ctx.badRequest('message is required');

      const safeEmail = email ? email.trim() : '';
      if (!safeEmail) return ctx.badRequest('email is required');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(safeEmail)) {
        return ctx.badRequest('Invalid email format');
      }

      const safePhone = phone ? phone.trim() : '';
      if (!safePhone) return ctx.badRequest('phone is required');
      const phoneRegex = /^\+?[\d\s\-\(\)]{7,20}$/;
      if (!phoneRegex.test(safePhone)) {
        return ctx.badRequest('Invalid phone format');
      }

      const allowedEnquiryTypes = [
        "Engineering or project requirement",
        "Machinery or automation",
        "IoT or software",
        "Product development",
        "Retrofit or modernization",
        "AMC or maintenance",
        "Training",
        "Partnership or supplier enquiry",
        "Media enquiry",
        "General enquiry",
        "Other"
      ];
      if (!allowedEnquiryTypes.includes(enquiryType)) {
        return ctx.badRequest('Invalid enquiryType');
      }

      const allowedResponseMethods = ["Telephone call", "Email", "Online meeting", "No preference"];
      if (preferredResponseMethod && !allowedResponseMethods.includes(preferredResponseMethod)) {
        return ctx.badRequest('Invalid preferredResponseMethod');
      }

      const allowedContactTimes = ["Morning", "Afternoon", "Any time during business hours"];
      if (preferredContactTime && !allowedContactTimes.includes(preferredContactTime)) {
        return ctx.badRequest('Invalid preferredContactTime');
      }

      if (consentAccurate !== true || consentNoObligation !== true) {
        return ctx.badRequest('Both consent values must be true');
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
      }

      const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      let referenceNumber = '';
      let isUnique = false;
      let attempts = 0;

      while (!isUnique && attempts < 5) {
        const suffix = crypto.randomBytes(3).toString('hex').toUpperCase();
        referenceNumber = `SAN-CON-${dateStr}-${suffix}`;
        
        const existing = await strapi.documents('api::contact-enquiry.contact-enquiry').findFirst({
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

      const payload: any = {
        referenceNumber,
        enquiryStatus: 'submitted',
        name: name.trim(),
        company: company.trim(),
        jobTitle: jobTitle ? jobTitle.trim() : null,
        country: country ? country.trim() : null,
        email: safeEmail,
        phone: safePhone,
        enquiryType,
        subject: subject.trim(),
        message: message.trim(),
        preferredResponseMethod: preferredResponseMethod || null,
        preferredContactTime: preferredContactTime || null,
        consentAccurate,
        consentNoObligation,
        supportingFiles: uploadedFileIds.length > 0 ? uploadedFileIds : null,
        submittedAt: new Date()
      };

      const entry = await strapi.documents('api::contact-enquiry.contact-enquiry').create({
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
