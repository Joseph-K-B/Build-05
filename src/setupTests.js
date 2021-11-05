require('dotenv').config();
global.fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
