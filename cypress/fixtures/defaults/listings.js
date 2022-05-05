//exporting default listings data
const defaultListing = () => {
  return {
    title: 'Test Listing',
    address: `${Date.now()} testing st`,
    rent_amount: 1250,
    security_deposit_amount: 625,
    listed: true,
    city: 'testCity',
    state: 'NY',
    zip: 80525,
    details: {
      amenities: {
        other: ['fenced_yard', 'garage', 'swimming_pool'],
        appliances: [
          'dishwasher',
          'dryer',
          'freezer',
          'garbage_disposal',
          'washer',
        ],
        cooling_systems: ['central'],
        floor_coverings: ['carpet', 'hardwood'],
        heating_systems: ['forced_air'],
      },
      lease_details: {
        lease_term: 'monthly',
        pets_allowed: ['no_pets'],
        utilities_included: ['water', 'sewage', 'electricity', 'gas'],
      },
      property_details: {
        bedrooms: 5,
        bathrooms: 3,
        year_built: null,
        square_feet: null,
        property_type: 'multi_family',
      },
    },
    smoking: 'NO',
    occupancy_limit: 1,
  };
};

module.exports = {
  defaultListing,
};
