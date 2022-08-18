const utils = require("../../utils/cypress-utils")

function addChargeRentPaymentsOnboardingValidation() {
  // cy.get('._2Jwq1zC8KWp9h1EtfJC5B5').should('have.text', 'Add Your Charges');
  cy.get(":nth-child(2) > ._278_iysWeRZpKYN_nagWdK > path").should(
    "have.attr",
    "fill-rule",
    "evenodd"
  )
  cy.get(":nth-child(3) > ._278_iysWeRZpKYN_nagWdK").should(
    "have.attr",
    "fill",
    "#033A6D"
  )
  cy.get(":nth-child(4) > ._278_iysWeRZpKYN_nagWdK").should(
    "have.attr",
    "fill",
    "#ACB9C8"
  )
  cy.get(":nth-child(2) > ._17Iv1Cy8fZgRQ5lChmYw97").should(
    "have.text",
    "Lease"
  )
  cy.get("._2a2CMlib1eFL5n9OVoVYc9").click()
  cy.get(":nth-child(3) > ._17Iv1Cy8fZgRQ5lChmYw97").should(
    "have.text",
    "Charges"
  )
  cy.get(":nth-child(4) > ._17Iv1Cy8fZgRQ5lChmYw97").should("have.text", "Bank")
  cy.get("._3p-OjgbvFYEbzyAqL8tL8Q").should("have.text", "Back")
  cy.get("._3p-OjgbvFYEbzyAqL8tL8Q").should(
    "have.attr",
    "href",
    "/owners/payments/onboarding/1"
  )
  cy.get("._3_-zf0vlrtQby4hrnMjMoc > :nth-child(1)").should(
    "have.text",
    "Skip for now"
  )
  cy.get("._2a2CMlib1eFL5n9OVoVYc9").click()
  // cy.get('._2Jwq1zC8KWp9h1EtfJC5B5').should('have.text', 'Add Your Charges');
  cy.get("._3Lgu2bEmJalOtlXPa7v_jF > :nth-child(2)").should(
    "have.text",
    "We automatically send charges to tenants 15 days before the due date. You can add and edit charges later on too."
  )
  cy.get(":nth-child(3) > ._3XZHI0wuxmu1L3fPvTO9Us > svg").should("be.visible")
  cy.get(":nth-child(3) > ._2NzJmKPcOWgHKMg7KQrIW2").should(
    "have.text",
    "Monthly Charges"
  )
  cy.get(
    ".Bl6kvZzVRU2V6_NwjzY_j > .KOme52q2ISMjWAC9zWxJQ > .a_AEsud0JHXw20iBJpSrV"
  ).should("have.attr", "for", "category")
  cy.get(
    ".Bl6kvZzVRU2V6_NwjzY_j > ._3T3pseywaMluPhT4U3hy66 > .a_AEsud0JHXw20iBJpSrV"
  ).should("have.attr", "for", "amount")
  cy.get(
    "._2RY1BzU1LsYJELpJU3IK1P > form > ._1I1T2e-QQxIxeWPL-IxRnZ > .a_AEsud0JHXw20iBJpSrV"
  ).should("have.text", "Description(Optional)")
  cy.get(
    ".Bl6kvZzVRU2V6_NwjzY_j > .KOme52q2ISMjWAC9zWxJQ > ._1hlP57VXBq6iy52c4umuzK > #category"
  ).should("have.attr", "data-qa", "monthly-charge-category-input")
  cy.get(
    ".Bl6kvZzVRU2V6_NwjzY_j > ._3T3pseywaMluPhT4U3hy66 > ._1YPHlHckbzFl0bBzKvYMnu > #amount"
  ).should("have.attr", "data-qa", "monthly-charge-amount-input")
  cy.get(
    "._2RY1BzU1LsYJELpJU3IK1P > form > ._1I1T2e-QQxIxeWPL-IxRnZ > #description"
  ).should("have.id", "description")
  cy.get(
    "._2RY1BzU1LsYJELpJU3IK1P > form > ._1I1T2e-QQxIxeWPL-IxRnZ > ._1-yp9pS--AyByRGw1zxVta"
  ).should("have.text", "0 / 50 characters used")
  cy.get(
    "._2ONRXAqKNHVhWxbJCdbyCs > :nth-child(1) > .a_AEsud0JHXw20iBJpSrV"
  ).should("have.attr", "for", "due_day_of_month")
  cy.get("#due_day_of_month").should("have.id", "due_day_of_month")
  cy.get(
    ":nth-child(1) > ._3NGmSmuRJgnV9fxsKYDYoK > .a_AEsud0JHXw20iBJpSrV"
  ).should("have.attr", "for", "first_month")
  cy.get("#first_month").should("have.attr", "name", "first_month")
  cy.get(
    ":nth-child(1) > ._3NGmSmuRJgnV9fxsKYDYoK > .a_AEsud0JHXw20iBJpSrV"
  ).should("have.attr", "for", "first_month")
  cy.get("#first_month").should("have.id", "first_month")
  cy.get("#first_year").should("have.id", "first_year")
  cy.get("#last_month").should("have.id", "last_month")
  cy.get(".KucGzb7vAvfkdBfoSnPUG").click()
  cy.get(
    ":nth-child(3) > ._3NGmSmuRJgnV9fxsKYDYoK > .a_AEsud0JHXw20iBJpSrV"
  ).should("have.attr", "for", "last_month")
  cy.get("#last_year").should("have.id", "last_year")
  cy.get("#no_end_date").should("have.id", "no_end_date")
  cy.get(".KucGzb7vAvfkdBfoSnPUG").click()
  cy.get(".KucGzb7vAvfkdBfoSnPUG").should("be.visible")
  cy.get("._6qp3bNhNBzO1oK2QoGgP- > ._2ce5vsvoTuXasRB5Rm9K5a").should(
    "have.attr",
    "data-qa",
    "monthly-charge-cancel-button"
  )
  cy.get("._6qp3bNhNBzO1oK2QoGgP- > .pg7GCfhbhmtWrWWZkPLW").should(
    "have.attr",
    "data-qa",
    "monthly-charge-save-button"
  )
  cy.get(
    "._10aTquuwyN3tXdvQh5n8z6 > ._3XZHI0wuxmu1L3fPvTO9Us > svg > path"
  ).should("be.visible")
  cy.get("._10aTquuwyN3tXdvQh5n8z6 > ._2NzJmKPcOWgHKMg7KQrIW2").should(
    "have.text",
    "One-time Charges"
  )
  cy.get("._1siyNdl3vfKdabyTsOfTy7").should(
    "have.text",
    "Good for deposits, pro-rated rent, move-in fees, etc."
  )
  cy.get("form > .KOme52q2ISMjWAC9zWxJQ > .a_AEsud0JHXw20iBJpSrV").should(
    "have.attr",
    "for",
    "category"
  )
  cy.get(
    "form > .KOme52q2ISMjWAC9zWxJQ > ._1hlP57VXBq6iy52c4umuzK > #category"
  ).should("have.attr", "data-qa", "one-time-charge-category-input")
  cy.get(
    "._1sCUCexYxpUCVwG9eh8PtE > ._3T3pseywaMluPhT4U3hy66 > .a_AEsud0JHXw20iBJpSrV"
  ).should("have.attr", "for", "amount")
  cy.get(
    "._3DViwfKyboIQ2HE39EsFKV > :nth-child(1) > .a_AEsud0JHXw20iBJpSrV"
  ).should("have.text", "Due Date")
  cy.get("#end_date").should(
    "have.attr",
    "data-qa",
    "one-time-charge-due-date-input"
  )
  cy.get(
    "._3h6dfMJT9uMA0HF1j7iYgU > form > ._1I1T2e-QQxIxeWPL-IxRnZ > .a_AEsud0JHXw20iBJpSrV"
  ).should("have.attr", "for", "description")
  cy.get(
    "._3h6dfMJT9uMA0HF1j7iYgU > form > ._1I1T2e-QQxIxeWPL-IxRnZ > #description"
  ).should("have.attr", "data-qa", "one-time-charge-description-input")
  cy.get(
    "._3h6dfMJT9uMA0HF1j7iYgU > form > ._1I1T2e-QQxIxeWPL-IxRnZ > #description"
  ).should("have.attr", "data-qa", "one-time-charge-description-input")
  cy.get("._20_PPa3gw4fVBqz8cKu7iN > ._2ce5vsvoTuXasRB5Rm9K5a").should(
    "have.attr",
    "data-qa",
    "monthly-charge-cancel-button"
  )
  cy.get("._20_PPa3gw4fVBqz8cKu7iN > .pg7GCfhbhmtWrWWZkPLW").should(
    "have.attr",
    "data-qa",
    "one-time-charge-save-button"
  )

  // not shown
  //cy.get('h6').should('have.text', 'Helpful info:');

  //cy.get('._1FPrYOUrAS-_2SlUGwz0aj > path').should('be.visible');

  //cy.get('.kIGf5oujcfwtJyN42y1xX > :nth-child(1)').should('have.text', 'Late fees are not automatically applied. You can add them later on as needed.');
  // cy.get('._36t6J3hjdWP7FLlzk0VN7i').should('have.text', 'Charges won’t be sent until you add tenants to the lease. Make sure to double-check charge due dates before you add tenants.');

  cy.get("._3daJlUz0p-zMmziiwTpaK8 > ._2ce5vsvoTuXasRB5Rm9K5a").should(
    "have.attr",
    "data-qa",
    "add-charges-skip-button"
  )
  cy.get("._1BllHFOY3csuEuJ9WxdNFM").should(
    "have.attr",
    "data-qa",
    "add-charges-next-button"
  )
}

function addChargeRentPaymentsOnboardingLogic() {
  utils.selectOption('[data-qa="monthly-charge-category-input"]', "RENT")
  utils.focusAndReplace('[data-qa="monthly-charge-amount-input"]', "100")
  utils.focusAndReplace(
    '[data-qa="one-time-charge-description-input"]',
    "test charge description"
  )
  cy.get('[data-qa="monthly-charge-due-day-of-month-input"]').click()
  cy.get('[data-qa="day-month-picker-1"]').click()
  cy.get('[data-qa="monthly-charge-save-button"]').click()
  utils.selectOption(
    '[data-qa="one-time-charge-category-input"]',
    "SECURITY_DEPOSIT"
  )
  utils.focusAndReplace('[data-qa="one-time-charge-amount-input"]', "100")
  cy.get("#end_date").click()
  cy.get(".DayPicker-Day--today").click()
  cy.get("._20_PPa3gw4fVBqz8cKu7iN > .pg7GCfhbhmtWrWWZkPLW").click()
  cy.get('[data-qa="add-charges-next-button"]').click()
  cy.get("#phone").clear()
  cy.get("#phone").type("(500) 555-0006")
  utils.focusAndReplace('[data-qa="address"]', "295 Plymouth Street")
  utils.focusAndReplace("#city", "Halifax")
  cy.get("#state").select("MA")
  utils.focusAndReplace("#zip", "02338")
  utils.focusAndReplace("#full_ssn", "000000000")
  utils.focusAndReplace("#dob", "01/01/1990")
  cy.get("#submit-setup-payments").click()
}

module.exports = {
  addChargeRentPaymentsOnboardingValidation,
  addChargeRentPaymentsOnboardingLogic
}
