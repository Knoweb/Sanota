export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: any) {
    try {
      // Find the public role
      const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (publicRole) {
        const actions = [
          'api::challenge-enquiry.challenge-enquiry.submit',
          'api::contact-enquiry.contact-enquiry.submit',
          'api::call-request.call-request.submit'
        ];
        
        for (const action of actions) {
          // Check if permission exists
          const existingPermission = await strapi.db.query('plugin::users-permissions.permission').findOne({
            where: {
              role: publicRole.id,
              action: action
            }
          });

          if (!existingPermission) {
            await strapi.db.query('plugin::users-permissions.permission').create({
              data: {
                action: action,
                role: publicRole.id,
              }
            });
            strapi.log.info(`Granted Public permission to ${action}`);
          }
        }
      }
    } catch (err) {
      strapi.log.error('Bootstrap error:', err);
    }
  },
};
