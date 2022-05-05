const defaultStripeExternalAccount = () => {
  return {
    stripe_external_account_id: 'ba_1G8FutHCww3gBj9s7cvRhxn8',

    type: 'BANK_ACCOUNT',
    external_account_info: {
      id: 'ba_1G8FutHCww3gBj9s7cvRhxn8',
      last4: '6789',
      object: 'bank_account',
      status: 'verified',
      account: 'acct_1G8FuDHCww3gBj9s',
      country: 'US',
      currency: 'usd',
      metadata: {},
      bank_name: 'STRIPE TEST BANK',
      fingerprint: 'zjfLjuISWhDKwsaq',
      routing_number: '110000000',
      account_holder_name: null,
      account_holder_type: null,
      default_for_currency: true,
    },
    bank_name: 'STRIPE TEST BANK',
    last4: '6789',
    status: 'VERIFIED',
    default_for_currency: true,
    currency: 'usd',
    stripe_account_id: 'acct_1G8FuDHCww3gBj9s',
  };
};

module.exports = {
  defaultStripeExternalAccount,
};
