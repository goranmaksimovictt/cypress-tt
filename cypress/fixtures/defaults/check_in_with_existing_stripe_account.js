/* eslint-disable @typescript-eslint/no-var-requires */
const moment = require('moment');

const data = () => {
  return [
    {
      model: 'owners',
      refName: 'owner1',
      data: {
        first_name: 'John',
        last_name: 'Doe',
      },
    },
    {
      model: 'owner_onboardings',
      refName: 'owner_onboardings1',
      data: {
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'listings',
      refName: 'listing1',
      data: {
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'payment_methods',
      refName: 'payment_method1',
    },
    {
      model: 'renters',
      refName: 'renter1',
      data: {
        customer_id: {
          ref_type: 'ref_field',
          ref_object: 'payment_method1',
          ref_field: 'customer_id',
        },
      },
    },
    {
      model: 'user_payment_methods',
      refName: 'user_payment_method1',
      data: {
        payment_method_id: {
          ref_type: 'ref_field',
          ref_object: 'payment_method1',
          ref_field: 'id',
        },
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter1',
          ref_field: 'id',
        },
        used_for_rent_payments: true,
      },
    },
    {
      model: 'leases',
      refName: 'lease1',
      data: {
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'listing1',
          ref_field: 'id',
        },
        rent_amount: 100,
      },
    },
    {
      model: 'leases_renters',
      refName: 'leasesrenters1',
      data: {
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter1',
          ref_field: 'id',
        },
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'stripe_identities',
      refName: 'stripeidentity1',
      data: {
        email: {
          ref_type: 'ref_field',
          ref_object: 'owner1',
          ref_field: 'email',
        },
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'stripe_external_accounts',
      refName: 'stripeexternalaccount1',
      data: {
        stripe_identity_id: {
          ref_type: 'ref_field',
          ref_object: 'stripeidentity1',
          ref_field: 'id',
        },
      },
    },

    {
      model: 'payment_request_rules',
      refName: 'paymentrequestrule1',
      data: {
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease1',
          ref_field: 'id',
        },
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner1',
          ref_field: 'id',
        },
        category: 'RENT',
        description: 'Test rent',
        amount: 10000,
        type: 'ONE_TIME',
        end_date: moment()
          .subtract(5, 'days')
          .format('YYYY-MM-DD'),
        finalized: true,
      },
    },
    {
      model: 'payment_requests',
      refName: 'paymentrequest1',
      data: {
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease1',
          ref_field: 'id',
        },
        payment_request_rule_id: {
          ref_type: 'ref_field',
          ref_object: 'paymentrequestrule1',
          ref_field: 'id',
        },
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner1',
          ref_field: 'id',
        },
        payment_request_rule: {
          ref_type: 'ref_object',
          ref_object: 'paymentrequestrule1',
        },
        category: 'RENT',
        description: 'Test rent',
        balance_due: 10000,
        due_date: {
          ref_type: 'ref_field',
          ref_object: 'paymentrequestrule1',
          ref_field: 'end_date',
        },
        amount: 10000,
      },
    },
  ];
};

module.exports = {
  data,
};
