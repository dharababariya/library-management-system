// Update with your config settings.
'use strict';

module.exports = {
  local: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    debug: false
  }
};