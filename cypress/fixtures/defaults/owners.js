const { generateTestEmail } = require("../../utils/cypress-utils")

const defaultOwner = () => {
  return {
    email: generateTestEmail(),
    password: "password",
    sign_in_count: 0,
    telephone: "1243523523",
    syndications_preapproved: false,
    first_name: "FirstName",
    last_name: "LastName",
    settings: {
      features: {
        enabled: ["onboarding"],
        selected: ["eviction_reports", "leads_questionnaire"],
        rent_payments: true
      }
    },
    require_insurance: false,
    tt_fraud_status: "APPROVED"
  }
}

module.exports = {
  defaultOwner
}
