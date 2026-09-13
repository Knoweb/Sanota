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
          'api::call-request.call-request.submit',
          'api::article.article.find',
          'api::article.article.findOne'
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

      // Seed 3 articles if the database is empty
      const existingArticlesCount = await strapi.documents('api::article.article').count();
      if (existingArticlesCount === 0) {
        strapi.log.info("No articles found. Seeding initial 3 articles...");
        
        const seedArticles = [
          {
            title: "Smart Drainage System: Tackling Floods with Technology",
            slug: "smart-drainage-system",
            category: "IoT Solutions",
            date: "2025-07-06",
            author: "Sanota Team",
            content: "Urban flooding has become a significant challenge, leading to infrastructure damage, economic losses, and risks to public safety. Traditional drainage systems often struggle to handle sudden, heavy rainfall. To address this, Sanota has developed an innovative Smart Drainage System that leverages IoT technology to monitor and manage water levels effectively.\n\nThis intelligent system uses strategically placed sensors to provide real-time data on water levels and flow rates within the drainage network. By continuously monitoring these parameters, the system can predict potential overflows and alert authorities before critical situations occur.\n\nOur solution integrates seamlessly with existing infrastructure, providing a centralized dashboard for city planners and maintenance teams. Through automated alerts and data analytics, municipalities can proactively deploy resources, clear blockages, and minimize the impact of heavy rains on communities.\n\nThe implementation of this technology represents a significant step forward in building resilient, smart cities capable of adapting to changing climate conditions."
          },
          {
            title: "Advancing Rehabilitation Through Innovation: Sanota's Nerve Stimulator",
            slug: "nerve-stimulator",
            category: "Health Tech",
            date: "2025-07-06",
            author: "Sanota Team",
            content: "Rehabilitation technology is advancing rapidly, offering new hope and improved outcomes for patients recovering from nerve injuries or neurological conditions. Sanota is proud to introduce our state-of-the-art Nerve Stimulator, designed to enhance the rehabilitation process through targeted electrical stimulation.\n\nOur Nerve Stimulator utilizes precise, controlled electrical impulses to activate specific nerves and muscles. This targeted approach helps prevent muscle atrophy, promotes blood circulation, and accelerates the recovery of nerve function. The device is highly customizable, allowing healthcare professionals to tailor treatments to each patient's unique needs.\n\nDeveloped in collaboration with leading medical experts, the Sanota Nerve Stimulator incorporates advanced safety features and an intuitive interface, making it suitable for both clinical and home use. Its compact, portable design ensures patients can continue their therapy consistently.\n\nWe believe that integrating innovative technology into rehabilitation is crucial for empowering patients and achieving better long-term health outcomes."
          },
          {
            title: "Smart Food Processing System Empowering Sri Lanka's Rural Clusters (ASMP)",
            slug: "asmp-food-processing",
            category: "Industrial Solutions",
            date: "2025-07-07",
            author: "Sanota Team",
            content: "In an effort to uplift rural economies and modernize the agricultural sector, Sanota has successfully deployed a Smart Food Processing System under the Agriculture Sector Modernization Project (ASMP) in Sri Lanka. This initiative focuses on empowering local farming communities by providing them with advanced processing capabilities.\n\nThe Smart Food Processing System automates key stages of production, ensuring consistent quality, hygiene, and efficiency. By integrating sensors and control systems, the machinery optimizes temperature, humidity, and processing times, significantly reducing waste and preserving the nutritional value of the produce.\n\nThis technological intervention enables rural clusters to add value to their raw agricultural products, allowing them to access higher-paying markets and improve their livelihoods. The system is designed to be user-friendly, requiring minimal technical expertise for operation and maintenance.\n\nSanota's commitment to sustainable and inclusive industrial development is exemplified by this project, demonstrating how targeted engineering solutions can drive socio-economic progress in rural communities."
          }
        ];

        for (const article of seedArticles) {
          await strapi.documents('api::article.article').create({
            data: article,
            status: 'published'
          });
        }
        strapi.log.info("Successfully seeded 3 articles!");
      }
    } catch (err) {
      strapi.log.error('Bootstrap error:', err);
    }
  },
};
