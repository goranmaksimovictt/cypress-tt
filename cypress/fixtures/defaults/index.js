const owners = require("./owners")
const listings = require("./listings")
const leases = require("./leases")
const renters = require("./renters")
const leases_renters = require("./leases_renters")
const owner_onboardings = require("./owner_onboardings")
const owner_verifications = require("./owner_verifications")
const stripe_identities = require("./stripe_identities")
const stripe_external_accounts = require("./stripe_external_accounts")
const payment_request_rules = require("./payment_request_rules")
const payment_requests = require("./payment_requests")
const rent_payments = require("./rent_payments")
const rent_transactions = require("./rent_transactions")
const rental_requests = require("./rental_requests")
const leads = require("./leads")
const paymentMethods = require("./payment_methods")
const userPaymentMethods = require("./user_payment_methods")
const lease_documents = require("./lease_documents")
const maintenance_requests = require("./maintenance_requests")

/**
 * Method returns all default data as an object
 *
 * @returns {{owners: *}}
 */
const defaultData = () => {
  return {
    owners: owners.defaultOwner(),
    owner_statistics: {},
    analytics_info: {},
    listings: listings.defaultListing(),
    leases: leases.defaultLease(),
    renters: renters.defaultRenter(),
    leases_renters: leases_renters.defaultLeaseRenter(),
    owner_onboardings: owner_onboardings.defaultOwnerOnboarding(),
    owner_verifications: owner_verifications.defaultOwnerVerifications(),
    stripe_identities: stripe_identities.defaultStripeIdentity(),
    stripe_external_accounts: stripe_external_accounts.defaultStripeExternalAccount(),
    payment_request_rules: payment_request_rules.defaultPaymentRequestRule(),
    payment_requests: payment_requests.defaultPaymentRequest(),
    rent_payments: rent_payments.defaultRentPayment(),
    rent_transactions: rent_transactions.defaultRentTransaction(),
    rental_requests: rental_requests.defaultRentalRequest(),
    leads: leads.defaultLead(),
    co_applicants: {},
    residences: {},
    pets: {},
    vehicles: {},
    income_sources: {},
    employments: {},
    contacts: {},
    payments: {},
    lead: {},
    payment_methods: paymentMethods.defaultPaymentMethods(),
    user_payment_methods: userPaymentMethods.defaultUserPaymentMethods(),
    lease_documents: lease_documents.defaultLeaseDocument(),
    maintenance_requests: maintenance_requests.defaultMaintenanceRequest()
  }
}

/**
 * Merges model's default data with data sent from fixtures
 *
 * @param model_name
 * @param data
 * @returns {*}
 */
const merge = (model_name, data) => {
  const default_data = defaultData()
  return Object.assign(default_data[model_name], data)
}

module.exports = {
  merge,
  defaultData
}
