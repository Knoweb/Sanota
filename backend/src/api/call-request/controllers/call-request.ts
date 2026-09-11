// @ts-nocheck
import { factories } from '@strapi/strapi';
import crypto from 'crypto';

export default factories.createCoreController('api::call-request.call-request', ({ strapi }) => ({
  async submit(ctx) {
    try {
      const body = ctx.request.body || {};

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
        phone,
        email,
        preferredContactTime,
        reason
      } = data;

      if (!name || typeof name !== 'string' || !name.trim()) return ctx.badRequest('name is required');
      if (!company || typeof company !== 'string' || !company.trim()) return ctx.badRequest('company is required');

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

      const allowedContactTimes = ["Morning", "Afternoon", "Any time during business hours"];
      if (preferredContactTime && !allowedContactTimes.includes(preferredContactTime)) {
        return ctx.badRequest('Invalid preferredContactTime');
      }

      const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      let referenceNumber = '';
      let isUnique = false;
      let attempts = 0;

      while (!isUnique && attempts < 5) {
        const suffix = crypto.randomBytes(3).toString('hex').toUpperCase();
        referenceNumber = `SAN-CALL-${dateStr}-${suffix}`;
        
        const existing = await strapi.documents('api::call-request.call-request').findFirst({
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
        email: safeEmail,
        phone: safePhone,
        preferredContactTime: preferredContactTime || null,
        reason: reason ? reason.trim() : null,
        submittedAt: new Date()
      };

      const entry = await strapi.documents('api::call-request.call-request').create({
        data: payload
      });

      return ctx.send({
        success: true,
        referenceNumber: entry.referenceNumber,
        message: 'Your call request has been submitted successfully.'
      });

    } catch (err: any) {
      strapi.log.error('Call request submission error:', err);
      return ctx.internalServerError('An error occurred during submission');
    }
  }
}));
