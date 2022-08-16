const utils = require("../../utils/cypress-utils")

function addBankAccountRentPaymentsOnboardingValidation() {
  cy.get("._2PT5fv1cVUwzpFBPFMUX1h").should(
    "have.text",
    "Add Your Bank Account"
  )
  cy.get(":nth-child(1) > ._1FOpcMzFJ-UKOrj9cRqWYx").should(
    "have.text",
    "Use Your Bank Login"
  )
  cy.get(":nth-child(2) > ._1FOpcMzFJ-UKOrj9cRqWYx").should(
    "have.text",
    "Enter Bank Info Manually"
  )
  cy.get(":nth-child(1) > ._1lyNpCYwwHVWAWJlnukdaZ").should("be.visible")
  cy.get(":nth-child(2) > ._1lyNpCYwwHVWAWJlnukdaZ").should("be.visible")
  cy.get(":nth-child(1) > ._2X_Irl-V64mHgAub_AnCfI").should(
    "have.attr",
    "data-qa",
    "add-bank-account-plaid-link-button"
  )
  cy.get(":nth-child(2) > ._2X_Irl-V64mHgAub_AnCfI").should(
    "have.attr",
    "type",
    "button"
  )
  cy.get(":nth-child(1) > ._2X_Irl-V64mHgAub_AnCfI").should(
    "have.text",
    "Add Via Login"
  )
  cy.get(":nth-child(2) > ._2X_Irl-V64mHgAub_AnCfI").should(
    "have.text",
    "Enter Manually"
  )
  cy.get(":nth-child(3) > ._278_iysWeRZpKYN_nagWdK > path").should(
    "have.attr",
    "fill-rule",
    "evenodd"
  )
  cy.get(":nth-child(4) > ._278_iysWeRZpKYN_nagWdK").should(
    "have.attr",
    "fill",
    "#033A6D"
  )
}

function addBankAccountRentPaymentsOnboardingLogic() {
  cy.get("._2a2CMlib1eFL5n9OVoVYc9").click()
  cy.get("._2a2CMlib1eFL5n9OVoVYc9").click()
  cy.get("._2a2CMlib1eFL5n9OVoVYc9").click()
  cy.get("._2a2CMlib1eFL5n9OVoVYc9").click()
  cy.get(":nth-child(1) > ._2X_Irl-V64mHgAub_AnCfI").click()
  cy.get("._2-VZPJrTY-woKMXRqCxM6p").click()
  cy.get("._2r6NRWSVk8-fFrgb_RnNzz > .pg7GCfhbhmtWrWWZkPLW").click()
  cy.get(".sBqsaKV46IQTQw0TTWkL9 > svg").click()
  cy.get("._32DbP3qrzGSnLEOl9sZ1nO > ._2X_Irl-V64mHgAub_AnCfI").click()
  cy.get('[style="width: 100%; height: 100%;"] > [style=""]').click()
  cy.get('[style="width: 100%; height: 100%;"] > [style=""]').click()
  cy.get("._2a2CMlib1eFL5n9OVoVYc9").click()
  cy.get("._2a2CMlib1eFL5n9OVoVYc9").click()
  cy.get("._2a2CMlib1eFL5n9OVoVYc9").click()
  cy.get('[style="width: 100%; height: 100%;"] > [style=""]').click()
  cy.get("._2a2CMlib1eFL5n9OVoVYc9").click()
  cy.get("._2a2CMlib1eFL5n9OVoVYc9").click()
  cy.get("._2X_Irl-V64mHgAub_AnCfI").click()
  cy.get("._2QMzZf7Bf6K1RzZECTQ2pT > ._2X_Irl-V64mHgAub_AnCfI").click()
}

function addBankAccountManuallyLogic() {
  cy.get(":nth-child(2) > ._2X_Irl-V64mHgAub_AnCfI").click()
  cy.get(
    '[data-qa="radio-account-holder-type-input-option-individual"]'
  ).click()
  utils.focusAndReplace("#account_holder_name", "Joe")
  utils.focusAndReplace("#routing_number", "110000000")
  utils.focusAndReplace("#account_number", "000123456789")
  utils.focusAndReplace("#account_number_confirm", "000123456789")
  cy.get("#add_bank_manually_submit").click()
  cy.get('[data-qa="next-button-bank-step"]').click()
}
module.exports = {
  addBankAccountRentPaymentsOnboardingValidation,
  addBankAccountRentPaymentsOnboardingLogic,
  addBankAccountManuallyLogic
}
