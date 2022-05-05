/* eslint-disable @typescript-eslint/no-var-requires */
const moment = require('moment');

const data = () => {
  return [
    {
      model: 'owners',
      refName: 'owner1',
      data: {
        first_name: 'Nenad',
        last_name: 'Test',
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
    {
      model: 'rent_payments',
      refName: 'rentpayment1',
      data: {
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter1',
          ref_field: 'id',
        },
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner1',
          ref_field: 'id',
        },
        charge_id: 'ch_testtest123',
        type: 'BANK_ACCOUNT',
        paid: false,
        refunded: false,
        payment_method: null,
        payment_method_details: {
          type: 'ach_debit',
          ach_debit: {
            last4: '1116',
            country: 'US',
            bank_name: 'STRIPE TEST BANK',
            fingerprint: 'GGX5sdL09nE5mG2K',
            routing_number: '110000000',
            account_holder_type: 'individual',
          },
        },
        transfer_data: { amount: 10000, destination: 'acct_1GC7bYEdva54gkLt' },
        billing_details: {
          name: null,
          email: null,
          phone: null,
          address: {
            city: null,
            line1: null,
            line2: null,
            state: null,
            country: null,
            postal_code: null,
          },
        },
        outcome: {
          type: 'authorized',
          reason: null,
          risk_level: 'not_assessed',
          network_status: 'approved_by_network',
          seller_message: 'Payment complete.',
        },
        status: 'failed',
        metadata: {},
        description: 'Rent payment',
        amount: 1000,
        stripe_account_id: {
          ref_type: 'ref_field',
          ref_object: 'stripeidentity1',
          ref_field: 'stripe_id',
        },
      },
    },
    {
      model: 'rent_transactions',
      refName: 'renttransaction1',
      data: {
        rent_payment_id: {
          ref_type: 'ref_field',
          ref_object: 'rentpayment1',
          ref_field: 'id',
        },
        payment_request_id: {
          ref_type: 'ref_field',
          ref_object: 'paymentrequest1',
          ref_field: 'id',
        },
        amount: 1000,
      },
    },
  ];
};

module.exports = {
  data,
};
