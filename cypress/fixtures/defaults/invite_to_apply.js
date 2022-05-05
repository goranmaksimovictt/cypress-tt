const data = () => {
  return [
    {
      model: 'owners',
      refName: 'owner_1',
      data: {
        first_name: 'David',
        last_name: 'Jones',
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
        address: '40 Stansfield Rd',
        city: 'Brixton',
        zip: '30005',
        unit: '',
        state: 'AK',
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
