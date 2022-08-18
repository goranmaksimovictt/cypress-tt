const data = () => {
  return [
    {
      model: "owners",
      refName: "owner1",
      data: {
        telephone: null,
        first_name: "FirstNameTest",
        last_name: "LastNameTest"
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
        address: `123 testing st`,
        owner_id: {
          ref_type: "ref_field",
          ref_object: "owner1",
          ref_field: "id"
        }
      }
    },
    {
      model: "leases",
      refName: "lease1",
      data: {
        listing_id: {
          ref_type: "ref_field",
          ref_object: "listing1",
          ref_field: "id"
        }
      }
    }
  ]
}

module.exports = {
  data
}
