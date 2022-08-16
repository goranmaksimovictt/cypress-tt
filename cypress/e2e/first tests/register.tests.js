describe("Registration Page", () => {
  beforeEach(() => {
    cy.visit("/auth/signup")
    cy.get("#landlord").click()
  })

  it("Fill out LandLord registration first name details empty", () => {
    cy.get("#signup_submit").click()
    cy.contains("This value is required")
  })

  it("Fill out LandLord registration first name details in improper format", () => {
    cy.get("#firstname").type("123")
    cy.get("#signup_submit").click()
    cy.contains("Only letters, hyphens, and accents are allowed")
  })

  it("Fill out LandLord registration last name details empty", () => {
    cy.get("#signup_submit").click()
    cy.get("#email_errormsg").contains("This value is required")
  })

  it("Fill out LandLord registration last name details in improper format", () => {
    cy.get("#email").type("123")
    cy.get("#signup_submit").click()
    cy.get("#email_errormsg").contains("Email is not valid")
  })

  it("Fill out LandLord registration password is empty", () => {
    cy.get("#signup_submit").click()
    cy.get("#password_errormsg").contains("This value is required")
  })

  it("Fill out LandLord registration password bellow minimum number of chars", () => {
    cy.get("#password").type("pass")
    cy.get("#signup_submit").click()
    cy.get("#password_errormsg").contains(
      "Password should have at least 8 characters"
    )
  })

  it("Fill out LandLord registration description without choosen option", () => {
    cy.get("#signup_submit").click()
    cy.get('*[class^="RadioGroup_error"]')
  })

  it("Fill out LandLord registration description without properties count", () => {
    cy.get("#signup_submit").click()
    cy.get("#propertiesCount_errormsg").contains("This value is required")
  })

  it("Fill out valid data for registration", () => {
    let timestamp = Math.floor(Date.now() / 1000)
    cy.get("#firstname").type("TestFirstName")
    cy.get("#lastname").type("TestLastname")
    cy.get("#email").type("goran.mak+" + timestamp + "@turbotenant.com")
    cy.get("#password").type("password")
    cy.get(
      '*[class^="RadioGroup_radioRow RadioGroup_horizontalRow SignupForm_radioRowClassName"]'
    )
      .first()
      .click()
    cy.get("#propertiesCount").type(1)
    cy.get("#signup_submit").click()
  })
})
