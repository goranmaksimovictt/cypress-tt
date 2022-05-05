/* eslint-disable @typescript-eslint/no-var-requires */
const { generateTestEmail } = require('../tests/puppeteer_utils');

const data = () => {
  return [
    {
      model: 'owners',
      refName: 'owner_change_listing_1',
      data: {
        telephone: null,
        first_name: 'Test',
        last_name: 'Test',
        email: generateTestEmail(),
      },
    },
    {
      model: 'owner_onboardings',
      refName: 'owner_1_onboarding',
      data: {
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_change_listing_1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'renters',
      refName: 'renter_1',
      data: {
        first_name: 'John',
        last_name: 'Doe',
        type: null,
        email: generateTestEmail(),
      },
    },
    {
      model: 'listings',
      refName: 'owner_listing_1',
      data: {
        address: '99 original listing',
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_change_listing_1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'listings',
      refName: 'owner_listing_2',
      data: {
        address: '88 changed listing',
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_change_listing_1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'rental_requests',
      refName: 'application_1',
      data: {
        first_name: {
          ref_type: 'ref_field',
          ref_object: 'renter_1',
          ref_field: 'first_name',
        },
        last_name: {
          ref_type: 'ref_field',
          ref_object: 'renter_1',
          ref_field: 'last_name',
        },
        email: {
          ref_type: 'ref_field',
          ref_object: 'renter_1',
          ref_field: 'email',
        },
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_listing_1',
          ref_field: 'id',
        },
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_1',
          ref_field: 'id',
        },
        completed_at: new Date(),
        agree_to_terms: true,
      },
    },
  ];
};

module.exports = {
  data,
};
