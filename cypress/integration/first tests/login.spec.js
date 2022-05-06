const fixtureUtils = require('../../utils/fixture-utils');

const ownerFixtures = fixtureUtils.getOwnerFixtures();


describe("Login Page", () => {
  beforeEach(() => {
    let url = Cypress.env('TEST_OWNER_URL') + '/auth/login';
    cy.visit(url);
    // cy.intercept('*');
  });

  it("After click Forgot Password, Redirect to forgot-password page", () => {
    cy.contains("Forgot Password").click();
    cy.url().should("include", "resetpassword/reset");
  });

  it("After click Don't have an account, Redirect to signup page", () => {
    cy.get('a[href="/auth/signup"]').click()
    cy.url().should("include", "signup");
  });

  it("Invalid login credentials", () => {
    // act
    cy.get("input[id=user]").type("invaliduser@turbotenant.com");
    cy.get("input[id=password]").type("password");
    cy.get("[type=submit]").click();

    // assert
    cy.contains("Wrong email or password.");
  });

  it("Valid login credentials", async () => {
    // cy.fixture('register.json') // Get data from fixtures/register.json

    // cy.intercept({
    //   method: 'POST',
    //   url: '/test/create_fixtures',
    // }).as('register')

    // cy.wait(['@register'])
    
console.log(ownerFixtures['confirmed_owner']);
    let owner_email= ownerFixtures['confirmed_owner'].rawData['email'];
    let owner_password = ownerFixtures['confirmed_owner'].rawData['password'];
    cy.get('input[id=user]').type(owner_email)
    cy.get("input[id=password]").type(owner_password);
    cy.get("[type=submit]").click();

  });
});
