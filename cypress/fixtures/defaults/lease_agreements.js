const data = () => {
  return [
    {
      model: 'payment_methods',
      refName: 'payment_method_1',
    },
    {
      model: 'owners',
      refName: 'owner_1',
      data: {
        first_name: 'Jane',
        last_name: 'Doe',
        customer_id: {
          ref_type: 'ref_field',
          ref_object: 'payment_method_1',
          ref_field: 'customer_id',
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
      model: 'user_payment_methods',
      refName: 'user_payment_method_1',
      data: {
        payment_method_id: {
          ref_type: 'ref_field',
          ref_object: 'payment_method_1',
          ref_field: 'id',
        },
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
        used_for_rent_payments: false,
      },
    },
    {
      model: 'listings',
      refName: 'owner_listing_1',
      data: {
        // Random number between 1 and 999999999 (max allowed digits for street
        // number).
        address: `${Math.floor(Math.random() * (999999999 - 1) + 1)} Test St`,
        state: 'TX',
        partial: false,
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'leases',
      refName: 'lease1',
      data: {
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_listing_1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'leases_renters',
      refName: 'leases_renter1',
      data: {
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_1',
          ref_field: 'id',
        },
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease1',
          ref_field: 'id',
        },
      },
    },
  ];
};

module.exports = {
  data,
};
