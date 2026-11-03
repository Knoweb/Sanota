import type { Core } from '@strapi/strapi';

const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://sanotaglobal.com',
        'https://www.sanotaglobal.com',
        'http://sanotaglobal.com',
        'http://www.sanotaglobal.com',
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://localhost:1337',
        'http://127.0.0.1:1337',
        '*',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'X-Requested-With'],
      keepHeadersOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default config;
