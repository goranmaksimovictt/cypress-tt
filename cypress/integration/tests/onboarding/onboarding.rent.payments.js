/* eslint-disable no-unused-vars */

const owner_logic = require("../../logic/owner_logic")
const owner_validation = require("../../validation/owner_validation")
const fillLeaseAndTenantDetails = require("../../../owners/payments/RentPaymentsLeaseTenant")
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
    owner_logic.signUpAndGetToWelcomeScreen({})
  })

  it("Set up rent payment", async () => {
    // owner_validation.setUpRentPayments();
    owner_logic.startRentPayments()
    await fillLeaseAndTenantDetails()
  })
})
