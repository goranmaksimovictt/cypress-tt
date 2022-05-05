/* eslint-disable @typescript-eslint/no-var-requires */
const { generateTestEmail } = require('../../utils/cypress-utils');

const defaultRenter = () => {
  return {
    email: generateTestEmail(),
    first_name: 'John',
    last_name: 'Doe',
    type: 'Tenant',
    password: 'password',
  };
};

module.exports = {
  defaultRenter,
};
