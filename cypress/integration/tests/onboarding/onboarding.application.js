const owner_logic = require('../logic/owner_logic');
const owner_validation = require('../validation/owner_validation');

describe("Invite to apply", () => {
    beforeEach(() => {
        cy.restoreLocalStorage();

        //  cy.intercept('*');
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it("Sign up and get started", () => {

        owner_logic.signUpAndGetToWelcomeScreen({});


    });

    it("Recieve Application", () => {

       owner_logic.chooseApplicationFlow();



    });

    it("Add your rental property", () => {
        //Validate all fields on adding property page
        owner_validation.addPropertyApplication();
        //Follow the test steps on adding property page
        owner_logic.propertyStep();



    });

    it("Invite renter to apply", () => {
        
            owner_validation.inviteRenter();
            owner_logic.addRenterToApply();

    });


    it("Recieve screening reports instantly", () => {
        
        owner_validation.mailingAddress();
        owner_logic.ownerMailingAddress();

    


    });

    it("Invitation sent", () => {

        owner_validation.invitationSent();
        owner_logic.invitationSent();


    });
    it("Property validation", () => {
        
        owner_logic.goToPropertiesPage();
        owner_validation.checkProperty();

    });

    it("Lead validation", () => {
        
        owner_logic.goToLeadsPage();
        owner_validation.checkCreatedLead();


    });
    
});
