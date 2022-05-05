/* eslint-disable @typescript-eslint/no-var-requires */
const moment = require('moment');

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
      model: 'leases',
      refName: 'lease_1',
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
          ref_object: 'lease_1',
          ref_field: 'id',
        },
        // This is the important column for these tests.
        archived_at: moment()
          .subtract(2, 'days')
          .format('YYYY-MM-DD'),
      },
    },
    {
      // Created before tenant was archived, so the tenant can see this doc.
      model: 'lease_documents',
      refName: 'lease_document_1',
      data: {
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease_1',
          ref_field: 'id',
        },
        title: 'document 1 tenant can see this',
        is_shared: true,
        created_at: moment()
          .subtract(3, 'days')
          .format('YYYY-MM-DD'),
      },
    },
    {
      // Created after tenant was archived, so the tenant can NOT see this doc.
      model: 'lease_documents',
      refName: 'lease_document_2',
      data: {
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease_1',
          ref_field: 'id',
        },
        title: 'document 2 tenant cannot see this',
        is_shared: true,
        created_at: moment().format('YYYY-MM-DD'),
      },
    },
    {
      model: 'maintenance_requests',
      refName: 'maintenance_request_1',
      data: {
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease_1',
          ref_field: 'id',
        },
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_listing_1',
          ref_field: 'id',
        },
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_1',
          ref_field: 'id',
        },
        title: 'Leaky shower test maintenance request',
        description: 'It leaks!',
        created_at: moment()
          .subtract(3, 'days')
          .format('YYYY-MM-DD'),
      },
    },
    {
      model: 'maintenance_requests',
      refName: 'maintenance_request_2',
      data: {
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease_1',
          ref_field: 'id',
        },
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_listing_1',
          ref_field: 'id',
        },
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_1',
          ref_field: 'id',
        },
        title: 'Maintenance request created after tenant archived',
        description:
          'Archived tenant should not be able to see this maintenance request.',
        created_at: moment().format('YYYY-MM-DD'),
      },
    },
    {
      model: 'payment_request_rules',
      refName: 'payment_request_rule_1',
      data: {
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease_1',
          ref_field: 'id',
        },
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
        category: 'RENT',
        description: 'Test rent',
        amount: 10000,
        type: 'ONE_TIME',
        end_date: moment()
          .subtract(3, 'days')
          .format('YYYY-MM-DD'),
        finalized: true,
      },
    },
    {
      model: 'payment_requests',
      refName: 'payment_request_1',
      data: {
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease_1',
          ref_field: 'id',
        },
        payment_request_rule_id: {
          ref_type: 'ref_field',
          ref_object: 'payment_request_rule_1',
          ref_field: 'id',
        },
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
        payment_request_rule: {
          ref_type: 'ref_object',
          ref_object: 'payment_request_rule_1',
        },
        category: 'RENT',
        description: 'Test rent',
        balance_due: 10000,
        // This is the date that's important for whether or not the archived
        // tenant can see the payment request.
        due_date: {
          ref_type: 'ref_field',
          ref_object: 'payment_request_rule_1',
          ref_field: 'end_date',
        },
        amount: 10000,
      },
    },

    {
      model: 'payment_request_rules',
      refName: 'payment_request_rule_2',
      data: {
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease_1',
          ref_field: 'id',
        },
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
        category: 'RENT',
        description: 'Test rent NO ACCESS TO ARCHIVED TENANT',
        amount: 10000,
        type: 'ONE_TIME',
        end_date: moment().format('YYYY-MM-DD'),
        finalized: true,
      },
    },
    {
      model: 'payment_requests',
      refName: 'payment_request_2',
      data: {
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease_1',
          ref_field: 'id',
        },
        payment_request_rule_id: {
          ref_type: 'ref_field',
          ref_object: 'payment_request_rule_2',
          ref_field: 'id',
        },
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
        payment_request_rule: {
          ref_type: 'ref_object',
          ref_object: 'payment_request_rule_2',
        },
        category: 'RENT',
        description: 'Test rent',
        balance_due: 23100,
        // This is the date that's important for whether or not the archived
        // tenant can see the payment request.
        due_date: {
          ref_type: 'ref_field',
          ref_object: 'payment_request_rule_2',
          ref_field: 'end_date',
        },
        amount: 23100,
      },
    },
  ];
};

module.exports = {
  data,
};
