// @ts-nocheck
import nodemailer from 'nodemailer';

interface MailConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
}

function getMailConfig(): MailConfig {
  const host = process.env.SMTP_HOST || 'smtp.zoho.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE !== 'false'; // default true for SSL 465
  const user = process.env.SMTP_USER || 'info@sanotaglobal.com';
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASSWORD || '';
  const from = process.env.EMAIL_FROM || `"SANOTA Global Web" <${user}>`;
  const to = process.env.NOTIFICATION_EMAIL || 'info@sanotaglobal.com';

  return { host, port, secure, user, pass, from, to };
}

function createTransporter() {
  const config = getMailConfig();

  if (!config.pass) {
    return null;
  }

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

function escapeHtml(text: string | null | undefined): string {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br/>');
}

function getBaseTemplate(title: string, badge: string, badgeColor: string, contentHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f4f6fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; }
    table { border-collapse: collapse; }
    .container { max-width: 650px; margin: 30px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #17135B 0%, #0d1238 100%); padding: 32px 36px; text-align: left; border-bottom: 4px solid #E5A93C; }
    .header h1 { margin: 0 0 6px 0; color: #ffffff; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
    .header p { margin: 0; color: #cbd5e1; font-size: 13px; font-weight: 500; }
    .badge { display: inline-block; padding: 6px 14px; border-radius: 9999px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px; background-color: ${badgeColor}; color: #ffffff; }
    .body-content { padding: 32px 36px; }
    .info-table { width: 100%; margin: 20px 0; border: 1px solid #f1f5f9; border-radius: 8px; overflow: hidden; }
    .info-table td { padding: 12px 16px; font-size: 14px; border-bottom: 1px solid #f1f5f9; vertical-align: top; }
    .info-table tr:last-child td { border-bottom: none; }
    .label { width: 34%; font-weight: 600; color: #64748b; background-color: #f8fafc; }
    .value { width: 66%; font-weight: 500; color: #0f172a; }
    .ref-box { display: inline-block; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; background-color: #fef3c7; color: #92400e; font-weight: 700; padding: 4px 10px; border-radius: 6px; font-size: 13px; border: 1px solid #fde68a; }
    .message-box { background-color: #f8fafc; border-left: 4px solid #E5A93C; padding: 16px 20px; margin: 20px 0; border-radius: 0 8px 8px 0; font-size: 14.5px; line-height: 1.6; color: #334155; }
    .btn { display: inline-block; padding: 12px 24px; border-radius: 8px; font-size: 13.5px; font-weight: 700; text-decoration: none; margin-right: 12px; margin-top: 10px; }
    .btn-primary { background-color: #E5A93C; color: #111424 !important; }
    .btn-secondary { background-color: #17135B; color: #ffffff !important; }
    .footer { background-color: #f8fafc; padding: 24px 36px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
    .footer a { color: #E5A93C; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div style="font-size: 11px; font-weight: 800; color: #E5A93C; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px;">SANOTA ENGINEERING GLOBAL</div>
      <h1>${title}</h1>
      <p>Automated notification from website submission system</p>
    </div>
    <div class="body-content">
      <span class="badge">${badge}</span>
      ${contentHtml}
    </div>
    <div class="footer">
      <p style="margin: 0 0 6px 0;">This email was sent automatically to <strong>${escapeHtml(getMailConfig().to)}</strong>.</p>
      <p style="margin: 0;">Recorded in <a href="https://sanotaglobal.com/admin" target="_blank">Sanota Strapi Content Manager</a> &bull; &copy; ${new Date().getFullYear()} Sanota Engineering</p>
    </div>
  </div>
</body>
</html>`;
}

/**
 * 1. Send Contact Enquiry Email Notification
 */
export async function sendContactEnquiryNotification(data: any): Promise<boolean> {
  const config = getMailConfig();
  const transporter = createTransporter();

  if (!transporter) {
    if (global.strapi) {
      global.strapi.log.warn(`[emailService] Email skipped: SMTP_PASS is not configured in backend/.env. Reference: ${data.referenceNumber}. Set SMTP_PASS to send to ${config.to}`);
    }
    return false;
  }

  const subject = `[Website Enquiry] ${data.referenceNumber} - ${data.name} (${data.company})`;

  const contentHtml = `
    <p style="font-size: 15px; margin-top: 0; color: #334155;">
      A new contact enquiry has been received via the <strong>Contact Sanota</strong> page.
    </p>

    <table class="info-table">
      <tr>
        <td class="label">Reference Number</td>
        <td class="value"><span class="ref-box">${escapeHtml(data.referenceNumber)}</span></td>
      </tr>
      <tr>
        <td class="label">Full Name</td>
        <td class="value"><strong>${escapeHtml(data.name)}</strong></td>
      </tr>
      <tr>
        <td class="label">Company / Organisation</td>
        <td class="value">${escapeHtml(data.company)}</td>
      </tr>
      ${data.jobTitle ? `<tr><td class="label">Job Title</td><td class="value">${escapeHtml(data.jobTitle)}</td></tr>` : ''}
      ${data.country ? `<tr><td class="label">Country</td><td class="value">${escapeHtml(data.country)}</td></tr>` : ''}
      <tr>
        <td class="label">Email Address</td>
        <td class="value"><a href="mailto:${escapeHtml(data.email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(data.email)}</a></td>
      </tr>
      <tr>
        <td class="label">Phone Number</td>
        <td class="value"><a href="tel:${escapeHtml(data.phone)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(data.phone)}</a></td>
      </tr>
      <tr>
        <td class="label">Enquiry Category</td>
        <td class="value"><strong>${escapeHtml(data.enquiryType)}</strong></td>
      </tr>
      <tr>
        <td class="label">Subject</td>
        <td class="value">${escapeHtml(data.subject)}</td>
      </tr>
      <tr>
        <td class="label">Preferred Response</td>
        <td class="value">${escapeHtml(data.preferredResponseMethod || 'No preference')}</td>
      </tr>
      <tr>
        <td class="label">Preferred Time</td>
        <td class="value">${escapeHtml(data.preferredContactTime || 'Any time during business hours')}</td>
      </tr>
      <tr>
        <td class="label">Supporting Files</td>
        <td class="value">${data.supportingFiles && data.supportingFiles.length > 0 ? `${data.supportingFiles.length} file(s) uploaded in Strapi` : 'None'}</td>
      </tr>
      <tr>
        <td class="label">Submission Date</td>
        <td class="value">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' })} (Sri Lanka Time)</td>
      </tr>
    </table>

    <div style="margin-top: 24px;">
      <strong style="color: #0f172a; font-size: 14px;">Enquiry Message:</strong>
      <div class="message-box">
        ${escapeHtml(data.message)}
      </div>
    </div>

    <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
      <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20Sanota%20Enquiry%20${encodeURIComponent(data.referenceNumber)}" class="btn btn-primary">
        Reply via Email
      </a>
      <a href="tel:${escapeHtml(data.phone)}" class="btn btn-secondary">
        Call Customer
      </a>
    </div>
  `;

  const html = getBaseTemplate(
    'New Contact Enquiry Received',
    'Contact Enquiry',
    '#2563eb',
    contentHtml
  );

  try {
    await transporter.sendMail({
      from: config.from,
      to: config.to,
      replyTo: data.email,
      subject,
      html,
    });
    if (global.strapi) {
      global.strapi.log.info(`[emailService] Contact enquiry notification sent to ${config.to} (${data.referenceNumber})`);
    }
    return true;
  } catch (err) {
    if (global.strapi) {
      global.strapi.log.error(`[emailService] Failed to send contact enquiry email (${data.referenceNumber}):`, err);
    }
    return false;
  }
}

/**
 * 2. Send Challenge Enquiry Email Notification ("Tell Us Your Challenge")
 */
export async function sendChallengeEnquiryNotification(data: any): Promise<boolean> {
  const config = getMailConfig();
  const transporter = createTransporter();

  if (!transporter) {
    if (global.strapi) {
      global.strapi.log.warn(`[emailService] Email skipped: SMTP_PASS is not configured in backend/.env. Reference: ${data.referenceNumber}. Set SMTP_PASS to send to ${config.to}`);
    }
    return false;
  }

  const contact = data.contactDetails || {};
  const isUrgent = !!data.priorityFlag || data.urgency === 'Immediate operational issue';
  const badgeColor = isUrgent ? '#dc2626' : '#E5A93C';
  const badgeTitle = isUrgent ? 'URGENT CHALLENGE ENQUIRY' : 'Challenge Enquiry';
  const subjectPrefix = isUrgent ? '🚨 [URGENT CHALLENGE]' : '[Challenge Enquiry]';
  const subject = `${subjectPrefix} ${data.referenceNumber} - ${contact.name || 'Customer'} (${contact.company || 'Enterprise'})`;

  let reqs = '';
  if (Array.isArray(data.coreRequirements)) {
    reqs = data.coreRequirements.join(', ');
  }

  let routingInfo = '';
  if (data.internalRouting) {
    const routes = data.internalRouting.primaryRoutes ? data.internalRouting.primaryRoutes.join(', ') : 'None';
    const teams = data.internalRouting.supportingTeams ? data.internalRouting.supportingTeams.join(', ') : 'None';
    routingInfo = `<tr><td class="label">Suggested Routing</td><td class="value"><strong>Routes:</strong> ${escapeHtml(routes)}<br/><strong>Teams:</strong> ${escapeHtml(teams)}</td></tr>`;
  }

  const contentHtml = `
    <p style="font-size: 15px; margin-top: 0; color: #334155;">
      A new technical challenge has been submitted via <strong>Tell Us Your Challenge</strong>.
    </p>

    <table class="info-table">
      <tr>
        <td class="label">Reference Number</td>
        <td class="value"><span class="ref-box">${escapeHtml(data.referenceNumber)}</span></td>
      </tr>
      <tr>
        <td class="label">Urgency / Priority</td>
        <td class="value">
          <strong style="color: ${isUrgent ? '#dc2626' : '#059669'};">
            ${escapeHtml(data.urgency || (isUrgent ? 'High Priority' : 'Standard'))}
          </strong>
          ${data.priorityReasons && data.priorityReasons.length > 0 ? `<br/><span style="font-size: 12px; color: #64748b;">Reasons: ${escapeHtml(data.priorityReasons.join('; '))}</span>` : ''}
        </td>
      </tr>
      <tr>
        <td class="label">Customer Name</td>
        <td class="value"><strong>${escapeHtml(contact.name)}</strong></td>
      </tr>
      <tr>
        <td class="label">Company / Facility</td>
        <td class="value">${escapeHtml(contact.company || 'N/A')}</td>
      </tr>
      ${contact.jobTitle ? `<tr><td class="label">Job Title</td><td class="value">${escapeHtml(contact.jobTitle)}</td></tr>` : ''}
      <tr>
        <td class="label">Email Address</td>
        <td class="value"><a href="mailto:${escapeHtml(contact.email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(contact.email || 'N/A')}</a></td>
      </tr>
      <tr>
        <td class="label">Phone Number</td>
        <td class="value"><a href="tel:${escapeHtml(contact.phone)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(contact.phone || 'N/A')}</a></td>
      </tr>
      <tr>
        <td class="label">Industry & Location</td>
        <td class="value">${escapeHtml(data.industry || 'Not specified')} &bull; ${escapeHtml(data.location || 'Not specified')}</td>
      </tr>
      <tr>
        <td class="label">Core Requirements</td>
        <td class="value"><strong>${escapeHtml(reqs)}</strong></td>
      </tr>
      ${routingInfo}
      <tr>
        <td class="label">Preferred Contact</td>
        <td class="value">${escapeHtml(contact.preferredContactMethod || 'N/A')} (${escapeHtml(contact.preferredContactTime || 'Any time')})</td>
      </tr>
      <tr>
        <td class="label">Supporting Files</td>
        <td class="value">${data.supportingFiles && data.supportingFiles.length > 0 ? `${data.supportingFiles.length} file(s) uploaded in Strapi` : 'None'}</td>
      </tr>
    </table>

    <div style="margin-top: 24px;">
      <strong style="color: #0f172a; font-size: 14px;">Current Situation / Problem:</strong>
      <div class="message-box">
        ${escapeHtml(data.currentSituation)}
      </div>
    </div>

    <div style="margin-top: 16px;">
      <strong style="color: #0f172a; font-size: 14px;">Desired Outcome / Target Result:</strong>
      <div class="message-box" style="border-left-color: #2563eb;">
        ${escapeHtml(data.desiredOutcome)}
      </div>
    </div>

    <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
      ${contact.email ? `<a href="mailto:${escapeHtml(contact.email)}?subject=Re:%20Sanota%20Challenge%20Enquiry%20${encodeURIComponent(data.referenceNumber)}" class="btn btn-primary">Reply via Email</a>` : ''}
      ${contact.phone ? `<a href="tel:${escapeHtml(contact.phone)}" class="btn btn-secondary">Call Customer</a>` : ''}
    </div>
  `;

  const html = getBaseTemplate(
    'Technical Challenge Enquiry Received',
    badgeTitle,
    badgeColor,
    contentHtml
  );

  try {
    await transporter.sendMail({
      from: config.from,
      to: config.to,
      replyTo: contact.email || undefined,
      subject,
      html,
    });
    if (global.strapi) {
      global.strapi.log.info(`[emailService] Challenge enquiry notification sent to ${config.to} (${data.referenceNumber})`);
    }
    return true;
  } catch (err) {
    if (global.strapi) {
      global.strapi.log.error(`[emailService] Failed to send challenge enquiry email (${data.referenceNumber}):`, err);
    }
    return false;
  }
}

/**
 * 3. Send Call Back Request Email Notification
 */
export async function sendCallRequestNotification(data: any): Promise<boolean> {
  const config = getMailConfig();
  const transporter = createTransporter();

  if (!transporter) {
    if (global.strapi) {
      global.strapi.log.warn(`[emailService] Email skipped: SMTP_PASS is not configured in backend/.env. Reference: ${data.referenceNumber}. Set SMTP_PASS to send to ${config.to}`);
    }
    return false;
  }

  const subject = `📞 [Call Request] ${data.referenceNumber} - ${data.name} (${data.company})`;

  const contentHtml = `
    <p style="font-size: 15px; margin-top: 0; color: #334155;">
      A customer has requested a <strong>call back</strong> from Sanota Engineering.
    </p>

    <table class="info-table">
      <tr>
        <td class="label">Reference Number</td>
        <td class="value"><span class="ref-box">${escapeHtml(data.referenceNumber)}</span></td>
      </tr>
      <tr>
        <td class="label">Full Name</td>
        <td class="value"><strong>${escapeHtml(data.name)}</strong></td>
      </tr>
      <tr>
        <td class="label">Company / Organisation</td>
        <td class="value">${escapeHtml(data.company)}</td>
      </tr>
      <tr>
        <td class="label">Phone Number to Call</td>
        <td class="value">
          <strong style="font-size: 16px;">
            <a href="tel:${escapeHtml(data.phone)}" style="color: #059669; text-decoration: none;">📞 ${escapeHtml(data.phone)}</a>
          </strong>
        </td>
      </tr>
      <tr>
        <td class="label">Email Address</td>
        <td class="value"><a href="mailto:${escapeHtml(data.email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(data.email)}</a></td>
      </tr>
      <tr>
        <td class="label">Preferred Contact Time</td>
        <td class="value"><strong>${escapeHtml(data.preferredContactTime || 'Any time during business hours')}</strong></td>
      </tr>
      ${data.reason ? `<tr><td class="label">Reason / Notes</td><td class="value">${escapeHtml(data.reason)}</td></tr>` : ''}
      <tr>
        <td class="label">Requested At</td>
        <td class="value">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' })} (Sri Lanka Time)</td>
      </tr>
    </table>

    <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
      <a href="tel:${escapeHtml(data.phone)}" class="btn btn-primary" style="background-color: #059669; color: #ffffff !important;">
        Call ${escapeHtml(data.phone)} Now
      </a>
      <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20Sanota%20Call%20Request%20${encodeURIComponent(data.referenceNumber)}" class="btn btn-secondary">
        Send Email
      </a>
    </div>
  `;

  const html = getBaseTemplate(
    'Customer Requested a Call Back',
    'Call Request',
    '#059669',
    contentHtml
  );

  try {
    await transporter.sendMail({
      from: config.from,
      to: config.to,
      replyTo: data.email,
      subject,
      html,
    });
    if (global.strapi) {
      global.strapi.log.info(`[emailService] Call request notification sent to ${config.to} (${data.referenceNumber})`);
    }
    return true;
  } catch (err) {
    if (global.strapi) {
      global.strapi.log.error(`[emailService] Failed to send call request email (${data.referenceNumber}):`, err);
    }
    return false;
  }
}
