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
      model: 'renters',
      refName: 'renter_1',
      data: {
        first_name: 'John',
        last_name: 'Doe',
        type: null,
      },
    },
    {
      model: 'renters',
      refName: 'renter_2',
      data: {
        first_name: 'Silvester',
        last_name: 'Stallone',
        type: null,
      },
    },
    {
      model: 'renters',
      refName: 'renter_3',
      data: {
        first_name: 'Jaime',
        last_name: 'Lannister',
        type: null,
      },
    },
    {
      model: 'renters',
      refName: 'renter_4',
      data: {
        first_name: 'Tirion',
        last_name: 'Lannister',
        type: null,
      },
    },
    {
      model: 'renters',
      refName: 'renter_5',
      data: {
        first_name: 'Cersei',
        last_name: 'Lannister',
        type: null,
      },
    },
    {
      model: 'renters',
      refName: 'renter_6',
      data: {
        first_name: 'Jon',
        last_name: 'Snow',
        type: null,
      },
    },
    {
      model: 'renters',
      refName: 'renter_7',
      data: {
        first_name: 'Rob',
        last_name: 'Stark',
        type: null,
      },
    },
    {
      model: 'renters',
      refName: 'renter_8',
      data: {
        first_name: 'Aria',
        last_name: 'Stark',
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
      refName: 'owner_listing_1',
      data: {
        address: `${Date.now()} Test St 123`,
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
      model: 'listings',
      refName: 'owner_listing_2',
      data: {
        address: `${Date.now()} Second St 456`,
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
      model: 'rental_requests',
      refName: 'application_1',
      data: {
        first_name: {
          ref_type: 'ref_field',
          ref_object: 'renter_2',
          ref_field: 'first_name',
        },
        last_name: {
          ref_type: 'ref_field',
          ref_object: 'renter_2',
          ref_field: 'last_name',
        },
        email: {
          ref_type: 'ref_field',
          ref_object: 'renter_2',
          ref_field: 'email',
        },
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_listing_1',
          ref_field: 'id',
        },
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_2',
          ref_field: 'id',
        },
        completed_at: new Date(),
        agree_to_terms: true,
      },
    },
    {
      model: 'rental_requests',
      refName: 'application_2',
      data: {
        first_name: {
          ref_type: 'ref_field',
          ref_object: 'renter_3',
          ref_field: 'first_name',
        },
        last_name: {
          ref_type: 'ref_field',
          ref_object: 'renter_3',
          ref_field: 'last_name',
        },
        email: {
          ref_type: 'ref_field',
          ref_object: 'renter_3',
          ref_field: 'email',
        },
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_listing_2',
          ref_field: 'id',
        },
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_3',
          ref_field: 'id',
        },
        completed_at: new Date(),
        agree_to_terms: true,
      },
    },
    {
      model: 'rental_requests',
      refName: 'application_3',
      data: {
        first_name: {
          ref_type: 'ref_field',
          ref_object: 'renter_5',
          ref_field: 'first_name',
        },
        last_name: {
          ref_type: 'ref_field',
          ref_object: 'renter_5',
          ref_field: 'last_name',
        },
        email: {
          ref_type: 'ref_field',
          ref_object: 'renter_5',
          ref_field: 'email',
        },
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_listing_2',
          ref_field: 'id',
        },
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_5',
          ref_field: 'id',
        },
        completed_at: new Date(),
        agree_to_terms: true,
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
      model: 'leases',
      refName: 'lease2',
      data: {
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_listing_1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'leases',
      refName: 'lease3',
      data: {
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_listing_2',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'leases',
      refName: 'lease4',
      data: {
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_listing_2',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'leases',
      refName: 'lease5',
      data: {
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_listing_2',
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
    {
      model: 'leases_renters',
      refName: 'leases_renter2',
      data: {
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_2',
          ref_field: 'id',
        },
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease2',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'leases_renters',
      refName: 'leases_renter3',
      data: {
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_3',
          ref_field: 'id',
        },
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease3',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'leases_renters',
      refName: 'leases_renter3',
      data: {
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_4',
          ref_field: 'id',
        },
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease3',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'leases_renters',
      refName: 'leases_renter4',
      data: {
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_5',
          ref_field: 'id',
        },
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease4',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'leases_renters',
      refName: 'leases_renter4',
      data: {
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_6',
          ref_field: 'id',
        },
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease4',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'leases_renters',
      refName: 'leases_renter5',
      data: {
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_7',
          ref_field: 'id',
        },
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease5',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'leases_renters',
      refName: 'leases_renter5',
      data: {
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_8',
          ref_field: 'id',
        },
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease5',
          ref_field: 'id',
        },
      },
    },
  ];
};

module.exports = {
  data,
};
