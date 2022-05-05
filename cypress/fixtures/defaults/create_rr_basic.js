/* eslint-disable @typescript-eslint/no-var-requires */
const { generateTestEmail } = require('../tests/puppeteer_utils');

const data = () => {
  return [
    {
      model: 'owners',
      refName: 'owner_1',
      data: {
        first_name: 'Jane',
        last_name: 'Doe',
        mailing_address: {
          zip: '30005',
          city: 'Sparks',
          unit: '',
          state: 'NV',
          address: '125 Astronomer Way',
        },
        telephone: '8231238123',
      },
    },
    {
      model: 'owner_verifications',
      refName: 'owner_verifications_1',
      data: {
        pin: '999999',
        contact_type: 1,
        verifications_count: 1,
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
        telephone: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'telephone',
        },
      },
    },
    {
      model: 'renters',
      refName: 'renter_1',
      data: {
        first_name: 'Alice',
        last_name: 'Ayres',
        type: null,
      },
    },
    {
      model: 'owner_onboardings',
      refName: 'owner_onboardings_1',
      data: {
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'listings',
      refName: 'listing_1',
      data: {
        address: '125 Astronomer Way',
        city: 'Sparks',
        zip: '30005',
        unit: '',
        state: 'NV',
        partial: true,
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
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
          ref_object: 'listing_1',
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
    {
      model: 'payments',
      refName: 'payment_1',
      data: {
        rental_request_id: {
          ref_type: 'ref_field',
          ref_object: 'application_1',
          ref_field: 'id',
        },
        amount: 4500,
        charge_id: 'ch_mocked_charge_id',
        source: {
          id: 'card_1HG3zGKTFJkLeHsPsjezUXXL',
          name: {
            ref_type: 'ref_field',
            ref_object: 'renter_1',
            ref_field: 'email',
          },
          brand: 'Visa',
          last4: '4242',
          object: 'card',
          country: 'US',
          funding: 'credit',
          customer: null,
          exp_year: 2024,
          metadata: {},
          cvc_check: 'pass',
          exp_month: 9,
          address_zip: '09090',
          fingerprint: 'KGu6XTKEHO6aUQz8',
          address_city: null,
          address_line1: null,
          address_line2: null,
          address_state: null,
          dynamic_last4: null,
          address_country: null,
          address_zip_check: 'pass',
          address_line1_check: null,
          tokenization_method: null,
        },
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_1',
          ref_field: 'id',
        },
        owner_id_back: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
        payer_type: 'RENTER',
        metadata: {
          email: generateTestEmail(),
          payer_type: 'RENTER',
          renterName: 'Alice Ayres',
          product_line: 'Online Application',
          listing_address: '194 Union St',
          rental_request_id: 'from e2e test',
        },
        updated_at: new Date(),
        created_at: new Date(),
      },
    },
  ];
};

module.exports = {
  data,
};
