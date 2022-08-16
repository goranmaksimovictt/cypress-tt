/* eslint-disable no-const-assign, no-unused-vars, no-undef, cypress/no-assigning-return-values */

const fetch = require("node-fetch")
const utils = require("../../utils/cypress-utils")
const fixtureUtils = require("../../utils/fixture-utils")
const fixturesData = require("../../fixtures/owner_login")

let ownerFixtures
let owner_email
let owner_password

// async function prepareOwnerFixtures(){
// const serverResponse = await fixtureUtils.createFixtures(
//   fixturesData.data(),
// );
// ownerFixtures = await serverResponse.data;
// owner_email=  ownerFixtures['confirmed_owner'].rawData['email'];
// console.log(ownerFixtures);
// console.log('email: '+owner_email);
// owner_password = ownerFixtures['confirmed_owner'].rawData['password'];
// console.log('password: '+owner_password);

// return ownerFixtures;
// }

let nameSuffix = utils.randomText(5)

if (!nameSuffix) {
  nameSuffix = utils.randomText(5)
}

const getDefaultOwnerTestEmail = () => {
  const timestamp = +new Date()
  return `test+${timestamp}@turbotenant.com`
}

const getDefaultOwnerTestPassword = () => {
  return "password"
}

async function loginOwner() {
  ownerFixtures = await prepareOwnerFixtures()
  owner_email = ownerFixtures["confirmed_owner"].rawData["email"]
  owner_password = ownerFixtures["confirmed_owner"].rawData["password"]

  cy.get("input[id=user]").type(owner_email)
  cy.get("input[id=password]").type(owner_password)
  cy.get("[type=submit]").click()
}

function signUpAndGetToWelcomeScreen({
  url = Cypress.env("TEST_OWNER_URL") + "/auth/signup",
  firstName = "FirstName",
  lastName = "LastName",
  password = "password",
  propertiesCount = "3"
}) {
  //load env varible
  // utils.loadDotEnv();
  // logout the user if it's logged in
  cy.visit(url)

  cy.clearLocalStorage()

  // const ownerFixtures =  prepareOwnerFixtures();
  const email = getDefaultOwnerTestEmail()

  // Uncomment for debugging:
  console.log(`email: ${email}`)

  utils.clickElement("#landlord")

  utils.focusAndReplace("#email", email)
  utils.focusAndReplace("#firstname", firstName)
  utils.focusAndReplace("#lastname", lastName)
  utils.focusAndReplace("#password", password)
  utils.focusAndReplace("#propertiesCount", propertiesCount)
  utils.clickElement(
    '[data-qa="radio-landlord-signup-description-input-option-my-rentals"]'
  )

  utils.clickElement("#signup_submit")
  // cy.url().should('include', Cypress.env('TEST_OWNER_URL') + '/onboarding/welcome');

  // utils.clickElement(
  //   '#lets_get_started');

  return { owner_email, owner_password }
}

function welcomeStep(page) {
  utils.waitUntilLoadingDisappears(page)
  utils.waitForAndClickElement("#personalize-my-account", page)
  page.waitForSelector("#when-is-your-next-vacancy")
}

function propertiesCountStep() {
  utils.waitForAndClickElement("#add-property-btn")
  utils.waitForAndClickElement("#next-vacancies")
  utils.waitForSelector("#when-is-your-next-vacancy")
}

function whenYourNextVacancy(page) {
  utils.waitForAndClickElement("#vacancy-id-NOW")
  utils.waitForAndClickElement("#next-rental-process")
  utils.waitForSelector("#onboarding-process-step")
}

function processStep(page, { process = "MARKETING" }) {
  utils.waitUntilLoadingDisappears(page)

  utils.waitForAndClickElement(
    `[data-qa="onboarding-choice-${kebabCase(process)}"]`
  )
  if (process.toLowerCase() !== "all") {
    utils.waitForAndClickElement('[data-qa="onboarding-continue-button"]', page)
  }
}

// For onboarding we use a "slim" property form that asks for the minimum
// information.
function propertyStep() {
  utils.focusAndReplace('[data-qa="address"]', "682734 Colorado Drive")
  utils.focusAndReplace('[data-qa="unit"]', "Apt. B")
  utils.focusAndReplace('[data-qa="city"]', "Fort Collins")
  utils.selectOption('[data-qa="state"]', "CA")
  utils.focusAndReplace('[data-qa="zip"]', "80525")
  utils.selectOption('[data-qa="onboarding-property-property-type"]', 1)
  utils.focusAndReplace('[data-qa="onboarding-property-bedrooms"]', "3")
  utils.focusAndReplace('[data-qa="details-property-details-bathrooms"]', "3")
  utils.focusAndReplace('[data-qa="rent-amount-input"]', "1200")
  utils.focusAndReplace(
    '[data-qa="onboarding-property-security-deposit"]',
    "1200"
  )

  utils.clickElement('[data-qa="onboarding-property-button-continue"]')
}

// Basic property and lease details form.
function propertyAndLeaseBasicStep() {
  utils.focusAndReplace('[data-qa="address"]', "203 4th St")
  utils.focusAndReplace('[data-qa="city"]', "Black Rock")
  utils.selectOption('[data-qa="state"]', "AR")
  utils.focusAndReplace('[data-qa="zip"]', "44444")

  // lease-details-basic-title
  utils.focusAndReplace(
    '[data-qa="lease-details-basic-title"]',
    "Lease for 203 4th - Thomas"
  )

  utils.focusAndReplace(
    '[data-qa="lease-details-basic-start_date"]',
    "01/21/2029"
  )

  utils.clickElement('[data-qa="lease-details-month-to-month-checkbox"]')

  utils.clickElement('[data-qa="lease-details-basic-button-continue"]')
}

function addNewTenant() {
  utils.clickElement("#tenants_index")

  utils.clickElement("#add-new-tenant")

  utils.focusAndReplace("#first_name", firstName)
  utils.focusAndReplace("#last_name", lastName)

  utils.focusAndReplace("#telephone", "1234567890")

  utils.focusAndReplace("#email", `test+${nameSuffix}@turbotenant.com`)

  utils.clickElement("#add_to_lease")
}

function addTenantToALease({ leaseId }) {
  utils.waitForSelector(
    leaseId ? `input[id='lease-${leaseId}']` : "input[id^='lease-']"
  )
  let firstLeaseBtn

  if (leaseId) {
    utils.waitForSelector(`input[id='lease-${leaseId}']`)
    firstLeaseBtn = cy.$(`input[id='lease-${leaseId}']`)
  } else {
    utils.waitForSelector("input[id^='lease-']")
    const leasesInputsBtns = cy.$$("input[id^='lease-']")
    firstLeaseBtn = leasesInputsBtns[0]
  }
  firstLeaseBtn.click()

  utils.waitForAndClickElement("#add_to_lease", page)

  utils.waitForSelector("#new-tenant-success")
}

async function enableFeatures({ email, features = ["rent_payments"] }) {
  return fetch(`${process.env.TEST_API_URL.trim()}/test/update_features`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      features
    })
  })
}

async function setApplyNow({ email, url, hidden }) {
  return fetch(`${process.env.TEST_API_URL.trim()}/test/set_apply_now`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      url,
      hidden
    })
  })
}

// For forms that still use the legacy StreetAddressFormWithSuggestion from
// commons.
function ownerMailingAddressCommons() {
  utils.focusAndReplace('[data-qa="mailing-address"]', "999 9th Owner St")
  utils.focusAndReplace(page, '[data-qa="mailing-city"]', "New Yorky")
  utils.selectOption(page, '[data-qa="mailing-state"]', 43)
  utils.focusAndReplace(page, '[data-qa="mailing-zip"]', "98765")
  utils.focusAndReplace(
    '[data-qa="external-application-owner-telephone"]',
    "2025550008"
  )
}

function ownerMailingAddress() {
  // Owner mailing address
  utils.focusAndReplace('[data-qa="address"]', "68726 Colorado Road")
  utils.focusAndReplace('[data-qa="city"]', "Fort Collins")
  utils.selectOption('[data-qa="state"]', "CO")
  utils.focusAndReplace('[data-qa="zip"]', "80525")
  utils.focusAndReplace('[data-qa="owner-phone-number"]', "(766) 262-7377"), // the old number 2025550007 is blocklisted
    utils.clickElement('[data-qa="onboarding-mailing-address-button-save"]')
}

async function addTenantForScreening(page) {
  // Tenant info
  const nameSuffix = utils.randomText(5)
  await utils.focusAndReplace(
    page,
    '[data-qa="external-application-renter-info-first-name"]',
    `Tenant`
  )
  utils.focusAndReplace(
    page,
    '[data-qa="external-application-renter-info-last-name"]',
    `Tenant Last`
  )
  utils.focusAndReplace(
    page,
    '[data-qa="external-application-renter-info-email"]',
    `test+manualtenant${nameSuffix}@turbotenant.com`
  )

  // Property. 3rd option (1 based) is the new property we added in a previous step.
  utils.selectOption(
    page,
    '[data-qa="external-application-rental-property-listing-select"]',
    3
  )

  // Owner mailing address
  ownerMailingAddressCommons(page)

  // Who pays?
  await utils.waitForAndClickElement(
    '[data-qa="external-application-who-pays-applicant"]',
    page
  )

  // Click button to continue
  await utils.waitForAndClickElement(
    '[data-qa="external-application-functional-button-next"]',
    page
  )

  await utils.waitUntilLoadingDisappears(page)
}

function addRenterToApply() {
  // Tenant info
  const nameSuffix = utils.randomText(5)
  utils.focusAndReplace(
    '[data-qa="onboarding-renter-info-first-name"]',
    `Tenant`
  )
  utils.focusAndReplace(
    '[data-qa="onboarding-renter-info-last-name"]',
    `Tenant Last`
  )
  utils.clickElement('[data-qa="radio-invite-type-input-option-email"]')

  utils.clickElement('[data-qa="radio-invite-type-input-option-both"]')

  utils.focusAndReplace(
    '[data-qa="onboarding-renter-info-email"]',
    `test+manualtenant${nameSuffix}@turbotenant.com`
  )
  utils.focusAndReplace("#phone", `1234567890`)

  utils.selectOption('[data-qa="onboarding-rental-property-listing-select"]', 0)

  // Click button to continue
  utils.clickElement('[data-qa="onboarding-renter-info-button-next"]')
}

function invitationSent() {
  utils.clickElement('[data-qa="onboarding-invite-success-page-button-done"]')
}

function chooseApplicationFlow() {
  cy.url().should("include", "onboarding/process")
  utils.clickElement("#button-id-RECEIVE_APPLICATION")
  utils.clickElement('[data-qa="onboarding-continue-button"]')
  cy.get("form").submit()
}

function chooseScreeningFlow() {
  cy.url().should("include", "onboarding/process")
  utils.clickElement("#button-id-SCREEN_TENANT")
  utils.clickElement('[data-qa="onboarding-continue-button"]')
  cy.get("form").submit()
}

function goToPropertiesPage() {
  utils.clickElement('[data-qa="sidebar-nav-item-property-index"]')
}
function goToLeadsPage() {
  utils.clickElement('[data-qa="sidebar-nav-item-leads-index"]')
}
function chooseRentPayments() {
  utils.clickElement("#button-id-RENT_PAYMENTS")
  utils.clickElement("#onboarding-continue-button")
}
function getStartedRentPayments() {
  utils.clickElement('[data-qa="lets-get-started"]')
}

module.exports = {
  loginOwner,
  addNewTenant,
  addTenantToALease,
  signUpAndGetToWelcomeScreen,
  welcomeStep,
  propertyStep,
  propertyAndLeaseBasicStep,
  propertiesCountStep,
  whenYourNextVacancy,
  processStep,
  enableFeatures,
  getDefaultOwnerTestEmail,
  getDefaultOwnerTestPassword,
  setApplyNow,
  addTenantForScreening,
  addRenterToApply,
  ownerMailingAddress,
  invitationSent,
  chooseApplicationFlow,
  chooseScreeningFlow,
  goToPropertiesPage,
  goToLeadsPage,
  chooseRentPayments,
  getStartedRentPayments
}
