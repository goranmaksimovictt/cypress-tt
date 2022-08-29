const data = () => {
  return [
    {
      model: "owners",
      refName: "confirmed_owner",
      data: {
        first_name: "Jane",
        last_name: "Doe"
      }
    },
    {
      model: "owners",
      refName: "unconfirmed_owner",
      data: {
        isUnconfirmed: true,
        first_name: "John",
        last_name: "Doe"
      }
    },
    {
      model: "owner_onboardings",
      refName: "confirmed_owner_onboarding",
      data: {
        owner_id: {
          ref_type: "ref_field",
          ref_object: "confirmed_owner",
          ref_field: "id"
        }
      }
    },
    {
      model: "listings",
      refName: "confirmed_owner_listing",
      data: {
        address: `${Date.now()} Test St 123`,
        partial: true,
        owner_id: {
          ref_type: "ref_field",
          ref_object: "confirmed_owner",
          ref_field: "id"
        }
      }
    }
  ]
}

module.exports = {
  data
}
