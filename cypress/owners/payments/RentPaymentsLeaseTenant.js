const utils = require('../../utils/cypress-utils');

async function fillLeaseAndTenantDetails(){
  await utils.focusAndReplace(page, '[data-qa="address"]', '5 Duh Dr');
  await utils.focusAndReplace(page, '[data-qa="city"]', 'Windy City');
  await utils.selectOption(page, '[data-qa="state"]', 22);
  await utils.focusAndReplace(page, '[data-qa="zip"]', '55555');

  await utils.focusAndReplace(
    page,
    '[data-qa="lease-details-basic-title"]',
    '5 Duh - Rollins',
  );

  await utils.focusAndReplace(
    page,
    '[data-qa="lease-details-basic-start_date"]',
    '01012022',
  );

  await utils.focusAndReplace(
    page,
    '[data-qa="lease-details-basic-end_date"]',
    '12312022',
  );

  // Go month-to-month automatically
  await utils.clickElement('#end_action_continue', page);

  await utils.clickElement(
    '[data-qa="lease-details-add-tenant-btn"]',
    page,
  );

  await utils.focusAndReplace('[data-qa="renters-0-first-name"]',
    'Henry',
  );

  await utils.focusAndReplace(
    '[data-qa="renters-0-last-name"]',
    'Rollins',
  );

  await utils.focusAndReplace(
    '[data-qa="renters-0-email"]',
    utils.generateTestEmail(),
  );

  await utils.clickElement(
    '[data-qa="lease-onboarding-partial-payments-radio-yes"]'
  );

  await utils.clickElement(
    '[data-qa="lease-details-basic-button-continue"]'
  );

};

module.exports = { fillLeaseAndTenantDetails };
