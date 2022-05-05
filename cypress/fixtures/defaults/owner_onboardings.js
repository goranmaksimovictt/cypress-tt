const defaultOwnerOnboarding = () => {
  return {
    properties: 1,
    process: 'ALL',
    getting_started: [
      { type: 'VIEW_AN_EXAMPLE', checked: null, deleted_at: null },
      { type: 'ADD_FIRST_PROPERTY', checked: null, deleted_at: null },
      { type: 'POST_YOUR_PROPERTY', checked: null, deleted_at: null },
      { type: 'POST_TO_CRAIGLIST', checked: null, deleted_at: null },
      { type: 'SHARE_LISTING', checked: null, deleted_at: null },
      { type: 'POST_TO_FACEBOOK', checked: null, deleted_at: null },
      { type: 'PRINT_FLYERS', checked: null, deleted_at: null },
      { type: 'ORDER_YARD_SIGNS', checked: null, deleted_at: null },
      { type: 'LEARN_MANAGING_LEADS', checked: null, deleted_at: null },
      { type: 'LEARN_RENTAL_APPLICATION', checked: null, deleted_at: null },
      { type: 'SETUP_RENTER_INSURANCE', checked: null, deleted_at: null },
    ],
  };
};

module.exports = {
  defaultOwnerOnboarding,
};
