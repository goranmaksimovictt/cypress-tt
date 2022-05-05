const data = () => {
  return [
    {
      model: 'owners',
      refName: 'owner_1',
      data: {
        first_name: 'Jane',
        last_name: 'Doe',
      },
    },
    {
      model: 'owner_onboardings',
      refName: 'owner_1_onboarding',
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
      refName: 'owner_1_listing',
      data: {
        address: `${Date.now()} Test St 123`,
        partial: true,
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
      },
    },
  ];
};

module.exports = {
  data,
};
