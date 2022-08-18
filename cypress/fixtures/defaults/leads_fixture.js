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
    }
  ]
}

module.exports = {
  data
}
