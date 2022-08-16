/* eslint-disable no-unused-vars */

const owner_logic = require("../../logic/owner_logic")
const owner_validation = require("../../validation/owner_validation")
const rent_payment_lease_tenant = require("../../../owners/payments/RentPaymentsLeaseTenant")
const rent_payment_add_charge = require("../../../owners/payments/RentPaymentsAddCharge")
const rent_payment_add_bank_account = require("../../../owners/payments/RentPaymentsAddBankAccount")

// const startRentPayments = require('../../logic/owner_logic');

describe("Rent payments", () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("session_id", "remember_token")
    cy.restoreLocalStorage()
    //  cy.intercept('*');
  })

  afterEach(() => {
    cy.saveLocalStorage()
  })

  it("Sign up and get started", () => {
    //   await owner_logic.prepareOwnerFixtures();
    owner_logic.signUpAndGetToWelcomeScreen({})
  })

  it("Set up rent payment", () => {
    // owner_validation.setUpRentPayments();
    owner_logic.chooseRentPayments()
    owner_logic.getStartedRentPayments()
    rent_payment_lease_tenant.fillLeaseAndTenantDetails()
    rent_payment_add_charge.addChargeRentPaymentsOnboardingValidation()
    rent_payment_add_charge.addChargeRentPaymentsOnboardingLogic()

    rent_payment_add_bank_account.addBankAccountManuallyLogic()
  })
  // it("Add Bank account ", () => {

  // rent_payment_add_bank_account.addBankAccountRentPaymentsOnboardingValidation();
  // rent_payment_add_bank_account.addBankAccountRentPaymentsOnboardingLogic();

  // });
})
