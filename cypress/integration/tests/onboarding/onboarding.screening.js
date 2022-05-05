const owner_logic = require('../logic/owner_logic');
const owner_validation = require('../validation/owner_validation');

describe("Invite to apply", () => {
    beforeEach(() => {
        cy.restoreLocalStorage();

        //   cy.intercept('*');
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it("Sign up and let's get started", () => {

        owner_logic.signUpAndGetToWelcomeScreen({});
    });

    it("Screen a tenant", () => {
        
        owner_logic.chooseScreeningFlow();

    });


    it("Add your rental property", () => {
        
        owner_validation.addPropertyScreening();
        owner_logic.propertyStep();

    });
    it("Check your properties page", () => {
        
        owner_logic.goToPropertiesPage();
        owner_validation.checkProperty();
       


});

});

