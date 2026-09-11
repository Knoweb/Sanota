export default {
  routes: [
    {
      method: 'POST',
      path: '/call-requests/submit',
      handler: 'call-request.submit',
      config: {
        auth: false
      }
    }
  ]
};
