/* eslint-disable cypress/no-async-tests */

const fixtureUtils = require("../../utils/fixture-utils")
const cypressUtils = require("../../utils/cypress-utils")

const fixturesData = require("../../fixtures/owner_login")
let ownerFixtures

describe("Login Page", () => {
  beforeEach(() => {
    let url = Cypress.env("TEST_OWNER_URL") + "/auth/login"
    cy.visit(url)
    // cy.intercept('*');
  })

  it("After click Forgot Password, Redirect to forgot-password page", () => {
    // cypressUtils.findSelectorAndClickOnIt("Forgot Password");
    // cy.url().should("include", "resetpassword/reset");

    cy.get("#user").click()
    cy.get("._3l9GltXSWKQEfCr0fwIQEY > ._2X_Irl-V64mHgAub_AnCfI").click()
    cy.get(
      ":nth-child(1) > ._2v0lS5f3Q3kz_BiWgc31D6 > ._3K1LnCATamWYF-lurj88xc"
    ).click()
    cy.get("#landlord").check()
    cy.get("#firstname").clear()
    cy.get("#firstname").type("test")
    cy.get("#lastname").clear()
    cy.get("#lastname").type("test")
    cy.get("#email").clear()
    let email = cypressUtils.generateTestEmail()
    cy.get("#email").type(email)

    cy.get("#password").clear()
    cy.get("#password").type("Test12345!")
    cy.get(
      "._3Ms0TpgGIED0iVj17JC_vj > :nth-child(1) > ._29k1jDoJz1Te6UqUTa1bQ5 > input"
    ).check()
    cy.get("#propertiesCount").clear()
    cy.get("#propertiesCount").type("4")
    cy.get("#signup_submit").click()
  })

  it("After click Don't have an account, Redirect to signup page", () => {
    cy.get('a[href="/auth/signup"]').click()
    cy.url().should("include", "signup")
  })

  it("Invalid login credentials", () => {
    // act
    cy.get("input[id=user]").type("invaliduser@turbotenant.com")
    cy.get("input[id=password]").type("password")
    cy.get("[type=submit]").click()

    // assert
    cy.contains("Wrong email or password.")
  })

  it("Valid login credentials", async () => {
    // cy.fixture('register.json') // Get data from fixtures/register.json

    // cy.intercept({
    //   method: 'POST',
    //   url: '/test/create_fixtures',
    // }).as('register')

    // cy.wait(['@register'])
    const serverResponse = await fixtureUtils.createFixtures(
      fixturesData.data()
    )
    ownerFixtures = serverResponse.data

    console.log(ownerFixtures["confirmed_owner"])

    let owner_email = ownerFixtures["confirmed_owner"].rawData["email"]
    let owner_password = ownerFixtures["confirmed_owner"].rawData["password"]
    cy.get("input[id=user]").type(owner_email)
    cy.get("input[id=password]").type(owner_password)
    cy.get("[type=submit]").click()
  })
})
