/* eslint-disable @typescript-eslint/no-var-requires */
const {
  // randomNumber,
  generateTestEmail,
} = require('../../utils/cypress-utils');

const defaultRentalRequest = () => {
  // const randomPhone = randomNumber(10);
const randomPhone = '';
  return {
    applying_as_a_tenant: true,
    applying_with_anyone: true,
    co_signers_list: 'roommate',
    move_in_date: new Date(2023, 1, 1),
    first_name: 'automated',
    last_name: 'testApplicant',
    birthdate: new Date(1989, 12, 20),
    email: generateTestEmail(),
    telephone: { telephone_1: { type: 'Other', number: randomPhone } },
    emergencyContacts: [
      {
        name: 'automated_test_contact',
        phone: '0000000001',
        relation: 'emergency_contact',
      },
    ],
    notCurrentlyEmployed: true,
    currentEmployers: [],
    pastEmployers: [],
    incomeSources: [],
    bank: 'wells_fargo',
    pet: false,
    pets: [],
    haveVehicles: false,
    vehicles: [],
    smokingOption: 3,
    evicted: true,
    evicted_description: 'was_evicted_once_when_I_was_18',
    civilAction: false,
    civilAction_description: '',
    conviction: null,
    conviction_description: '',
    disability: false,
    disability_description: '',
    how_did_you_hear: 'FACEBOOK',
    agree_to_terms: true,
    password: 'turbotenant',
    profile_bio: 'I_am_organized_and_quiet_and_I_keep_to_myself',
    request_method: 'ONLINE',
    completed_at: new Date(),
  };
};

module.exports = {
  defaultRentalRequest,
};
