const defaultStripeIdentity = () => {
  return {
    stripe_id: 'acct_1G8FuDHCww3gBj9s',
    entity: {
      id: 'person_Gfb6hnAr5GfdIi',
      dob: { day: 1, year: 1980, month: 1 },
      email: 'test+1580778477541@turbotenant.com',
      phone: '+12025558667',
      object: 'person',
      account: 'acct_1G8FuDHCww3gBj9s',
      address: {
        city: 'Miami Beach',
        line1: '120 Ocean Dr',
        line2: null,
        state: 'DE',
        country: 'US',
        postal_code: '33139',
      },
      created: 1580778526,
      metadata: {},
      last_name: 'Parker',
      first_name: 'Peter',
      relationship: {
        owner: false,
        title: null,
        director: false,
        executive: true,
        account_opener: true,
        representative: true,
        percent_ownership: null,
      },
      requirements: {
        errors: [],
        past_due: [],
        currently_due: [],
        eventually_due: [],
        pending_verification: [],
      },
      verification: {
        status: 'verified',
        details: null,
        document: {
          back: null,
          front: null,
          details: null,
          details_code: null,
        },
        details_code: null,
        additional_document: {
          back: null,
          front: null,
          details: null,
          details_code: null,
        },
      },
      id_number_provided: true,
      ssn_last_4_provided: true,
    },
    charges_enabled: true,
    payouts_enabled: true,
    capabilities: { card_payments: 'active', platform_payments: 'active' },
    requirements: {
      errors: [],
      past_due: [],
      currently_due: [],
      eventually_due: [],
      disabled_reason: null,
      current_deadline: null,
      pending_verification: [],
    },
    external_accounts: [],
    account_opener_id: 'person_Gfb6hnAr5GfdIi',
    account_opener: {
      id: 'person_Gfb6hnAr5GfdIi',
      dob: { day: 1, year: 1980, month: 1 },
      email: 'test+1580778477541@turbotenant.com',
      phone: '+12025558667',
      object: 'person',
      account: 'acct_1G8FuDHCww3gBj9s',
      address: {
        city: 'Miami Beach',
        line1: '120 Ocean Dr',
        line2: null,
        state: 'DE',
        country: 'US',
        postal_code: '33139',
      },
      created: 1580778526,
      metadata: {},
      last_name: 'Parker',
      first_name: 'Peter',
      relationship: {
        owner: false,
        title: null,
        director: false,
        executive: true,
        account_opener: true,
        representative: true,
        percent_ownership: null,
      },
      requirements: {
        past_due: [],
        currently_due: [],
        eventually_due: [],
        pending_verification: [],
      },
      verification: {
        status: 'verified',
        details: null,
        document: {
          back: null,
          front: null,
          details: null,
          details_code: null,
        },
        details_code: null,
        additional_document: {
          back: null,
          front: null,
          details: null,
          details_code: null,
        },
      },
      id_number_provided: true,
      ssn_last_4_provided: true,
    },
    tos_acceptance: { ip: '54.204.119.18', date: 1580778525, user_agent: null },
    business_type: 'individual',
  };
};

module.exports = {
  defaultStripeIdentity,
};
