const data = () => {
  return [
    {
      model: "owners",
      refName: "owner1",
      data: {
        first_name: "Nenad",
        last_name: "Test"
      }
    },
    {
      model: "owner_onboardings",
      refName: "owner_onboardings1",
      data: {
        owner_id: {
          ref_type: "ref_field",
          ref_object: "owner1",
          ref_field: "id"
        }
      }
    },
    {
      model: "listings",
      refName: "listing1",
      data: {
        owner_id: {
          ref_type: "ref_field",
          ref_object: "owner1",
          ref_field: "id"
        }
      }
    },
    {
      model: "renters",
      refName: "renter1",
      data: {}
    },
    {
      model: "leases",
      refName: "lease1",
      data: {
        listing_id: {
          ref_type: "ref_field",
          ref_object: "listing1",
          ref_field: "id"
        },
        rent_amount: 100
      }
    },
    {
      model: "leases_renters",
      refName: "leasesrenters1",
      data: {
        renter_id: {
          ref_type: "ref_field",
          ref_object: "renter1",
          ref_field: "id"
        },
        lease_id: {
          ref_type: "ref_field",
          ref_object: "lease1",
          ref_field: "id"
        }
      }
    },
    {
      model: "stripe_identities",
      refName: "stripeidentity1",
      data: {
        email: {
          ref_type: "ref_field",
          ref_object: "owner1",
          ref_field: "email"
        },
        owner_id: {
          ref_type: "ref_field",
          ref_object: "owner1",
          ref_field: "id"
        }
      }
    },
    {
      model: "stripe_external_accounts",
      refName: "stripeexternalaccount1",
      data: {
        stripe_identity_id: {
          ref_type: "ref_field",
          ref_object: "stripeidentity1",
          ref_field: "id"
        }
      }
    }
  ]
}

module.exports = {
  data
}
