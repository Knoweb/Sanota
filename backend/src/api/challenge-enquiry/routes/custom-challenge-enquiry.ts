export default {
  routes: [
    {
      method: 'POST',
      path: '/challenge-enquiries/submit',
      handler: 'challenge-enquiry.submit',
      config: {
        auth: false,
      },
    },
  ],
};
