const { trim } = require("lodash");
const owner_logic = require("../logic/owner_logic");

function inviteRenter() {
    cy.url().should('include', '/onboarding/invite-renter')

    cy.get(".s77-1iSNTJnwqYuSqUey8").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Invite Renter to Apply");
    });

    cy.get("._3fyX8tjokzkF3l1CZtaImu").eq(0).then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Renter Info");
    });
    cy.get('[for="firstname"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("First Name");
    });
    cy.get('[for="lastname"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Last Name");
    });
    cy.get('[for="inviteType"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Send Invite By:");
    });
    cy.get('[data-qa="radio-invite-type-input-option-both"]').should('be.checked');


    cy.get(".rlUWFppYE-DfNhOEidM_o").eq(0).then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Email & Text");
    });
    cy.get(".rlUWFppYE-DfNhOEidM_o").eq(1).then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Email");
    });
    cy.get(".rlUWFppYE-DfNhOEidM_o").eq(2).then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Text");
    });


    cy.get('[for="email"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Renter's Email");
    });

    cy.get('[for="phone"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Phone");
    });


    cy.get('.gG_q7GoL-MWezsLjC4iXI').eq(1).then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Rental Property");
    });

    cy.get('[for="property"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Property Applying To");
    });

    cy.get('[data-qa="onboarding-rental-property-listing-select"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("682734 Colorado Drive");
    });

    cy.get('[id="skip"]').then(($el) => {
        const text = $el.text();

        expect(text.toUpperCase()).to.eq("SKIP FOR NOW");
    });

    cy.get('[data-qa="onboarding-renter-info-button-next"]').then(($el) => {
        const text = $el.text();

        expect(text.toUpperCase()).to.eq("SEND INVITE");
    });



    cy.get("._38JL4_L1II64NttKqXkdc7").then(($el) => {
        const text = $el.text();

        expect(text.toUpperCase()).to.eq("RENTAL APPLICATION & SCREENING");
    });

    cy.get("._23UYNcOB_X94WYPQpT391j").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("How it Works");
    });

    cy.get('._1qooS-N2R5Abp1LfLJLYyy').contains('We send the renter a link to the application.')
    cy.get('._1qooS-N2R5Abp1LfLJLYyy').contains('They pay the $45 fee, which covers the credit, background, and eviction check.')
    cy.get('._1qooS-N2R5Abp1LfLJLYyy').contains('You’ll get an email when they complete the application.')
    cy.get('._1qooS-N2R5Abp1LfLJLYyy').contains('You can then pull the screening report.')


    cy.get("._2rmftPPYNiWkcfYjMvLAiC").then(($el) => {

        expect($el).attr('href', 'https://support.turbotenant.com/en/articles/4004061-what-does-the-online-rental-application-look-like')
    });


    //check if image is displayed
    cy.get('[alt="rental application & screening"]')
        .should('be.visible')
        .and(($img) => {
            // "naturalWidth" and "naturalHeight" are set when the image loads
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })

};



function addPropertyScreening() {
    cy.url().should('include', '/onboarding/property')

    cy.get("._3qQ5QZZ1SYw3V2jAvAjDXU").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Add Your Rental Property");
    });
    cy.get(".Fu32A-oARZT8EXRbNp7MR").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("You can change this information later.");
    });

    cy.get("._38JL4_L1II64NttKqXkdc7").then(($el) => {
        const text = $el.text();

        expect(text.toUpperCase()).to.eq("FIND THE RIGHT TENANT");
    });

    cy.get("._23UYNcOB_X94WYPQpT391j").then(($el) => {
        const text = $el.text();

        expect(text).to.oneOf("Screen Your Tenants", "Online Application & Screening");
    });

    cy.get("._39gY7HxZXC6ie5MJq8cVYI").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("With access to their credit, criminal, and eviction history, you’ll know how reliable they’ll be as a tenant.");
    });

    //check if image is displayed
    cy.get('[alt="Find the Right Tenant"]')
        .should('be.visible')
        .and(($img) => {
            // "naturalWidth" and "naturalHeight" are set when the image loads
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })

    cy.get("#downshift-1-label").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Street Address");
    });
    cy.get("#downshift-1-label").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Street Address");
    });

    cy.get('[for="unit"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Unit(Optional)");
    });

    cy.get('[for="city"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("City");
    });
    cy.get('[for="state"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("State");
    });
    cy.get('[for="zip"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Zip Code");
    });

    cy.get('[for="property_type"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Property Type");
    });

    cy.get('[for="bedrooms"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Bedrooms");
    });
    cy.get('[for="bedrooms"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Bedrooms");
    });


    cy.get('[for="baths"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Baths");
    });

    cy.get('[for="rent_amount"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Rent Amount");
    });
    cy.get('[for="security_deposit_amount"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Security Deposit");
    });
    cy.get('#add_property_submit').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Continue");
    });

    cy.get('[data-qa="onboarding-property-property-type"]').then(($el) => {
        const text = $el.text().slice(0, 13);

        expect(text).to.eq("Single-Family");
    });
    cy.get('[data-qa="onboarding-property-property-type"]').select('').should('have.value', '')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Single-Family').should('have.value', 'SINGLE_FAMILY')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Apartment').should('have.value', 'APARTMENT')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Condo').should('have.value', 'CONDO')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Townhouse').should('have.value', 'TOWNHOUSE')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Co-op').should('have.value', 'CO_OP')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Multi-Family').should('have.value', 'MULTI_FAMILY')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Manufactured').should('have.value', 'MANUFACTURED')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Other').should('have.value', 'OTHER')

}
function addPropertyApplication(){
    cy.url().should('include', '/onboarding/property')

    cy.get("._3qQ5QZZ1SYw3V2jAvAjDXU").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Add Your Rental Property");
    });
    cy.get(".Fu32A-oARZT8EXRbNp7MR").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("You can change this information later.");
    });

    cy.get("._38JL4_L1II64NttKqXkdc7").then(($el) => {
        const text = $el.text();

        expect(text.toUpperCase()).to.eq("FIND THE RIGHT TENANT");
    });

    cy.get("._23UYNcOB_X94WYPQpT391j").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Online Application & Screening");
    });

    cy.get("._39gY7HxZXC6ie5MJq8cVYI").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Get all the information you need to make a decision on a tenant—landlords references, proof of income, their credit score, a criminal history, and more!");
    });

    //check if image is displayed
    cy.get('[alt="Find the Right Tenant"]')
        .should('be.visible')
        .and(($img) => {
            // "naturalWidth" and "naturalHeight" are set when the image loads
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })

    cy.get("#downshift-1-label").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Street Address");
    });
    cy.get("#downshift-1-label").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Street Address");
    });

    cy.get('[for="unit"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Unit(Optional)");
    });

    cy.get('[for="city"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("City");
    });
    cy.get('[for="state"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("State");
    });
    cy.get('[for="zip"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Zip Code");
    });

    cy.get('[for="property_type"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Property Type");
    });

    cy.get('[for="bedrooms"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Bedrooms");
    });
    cy.get('[for="bedrooms"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Bedrooms");
    });


    cy.get('[for="baths"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Baths");
    });

    cy.get('[for="rent_amount"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Rent Amount");
    });
    cy.get('[for="security_deposit_amount"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Security Deposit");
    });
    cy.get('#add_property_submit').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Continue");
    });

    cy.get('[data-qa="onboarding-property-property-type"]').then(($el) => {
        const text = $el.text().slice(0, 13);

        expect(text).to.eq("Single-Family");
    });
    cy.get('[data-qa="onboarding-property-property-type"]').select('').should('have.value', '')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Single-Family').should('have.value', 'SINGLE_FAMILY')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Apartment').should('have.value', 'APARTMENT')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Condo').should('have.value', 'CONDO')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Townhouse').should('have.value', 'TOWNHOUSE')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Co-op').should('have.value', 'CO_OP')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Multi-Family').should('have.value', 'MULTI_FAMILY')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Manufactured').should('have.value', 'MANUFACTURED')
    cy.get('[data-qa="onboarding-property-property-type"]').select('Other').should('have.value', 'OTHER')

}

function mailingAddress() {
    cy.url().should('include', '/onboarding/mailing-address')

    cy.get("._3moKZIqCFmRNUsrF0p8j14").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Receive Screening Reports Instantly!");
    });


    cy.get("._2AgUd2clSo2yA04h8DTH45").eq(0).then(($el) => {
        const text = $el.text();

        expect(text).to.eq("TransUnion, the reporting agency, requires your mailing address and phone number in order to run a credit, criminal, and eviction check.");
    });
    cy.get("._2AgUd2clSo2yA04h8DTH45").eq(1).then(($el) => {
        const text = $el.text();

        expect(text).to.eq("If you add it now, you’ll instantly receive a renter's screening report as long as they approve the request when they fill out the rental application.");
    });

    cy.get(".gG_q7GoL-MWezsLjC4iXI").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Your Mailing Address");
    });
    cy.get("._2YE51Eb0DGkBexRIVO7W1P").then(($el) => {
        const text = $el.text();

        expect(text).to.eq("PO Boxes are not permitted.");
    });

    cy.get('.a_AEsud0JHXw20iBJpSrV').eq(0).then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Street Address");
    });

    cy.get('[for="unit"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Unit(Optional)");
    });

    cy.get('[for="city"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("City");
    });
    cy.get('[for="state"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("State");
    });
    cy.get('[for="zip"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Zip Code");
    });
    cy.get('[for="phone"]').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("Your Phone Number");
    });
    cy.get('#skip').then(($el) => {
        const text = $el.text().toUpperCase();

        expect(text).to.eq("MAYBE LATER");
    });
    cy.get('#save').then(($el) => {
        const text = $el.text().toUpperCase();

        expect(text).to.eq("SAVE");
    });

    cy.get('._38JL4_L1II64NttKqXkdc7').then(($el) => {
        const text = $el.text().toUpperCase();

        expect(text).to.eq("FIND THE RIGHT TENANT");
    });

    cy.get('._23UYNcOB_X94WYPQpT391j').then(($el) => {
        const text = $el.text();

        expect(text).to.eq("screen your tenants");
    });

    cy.get('._3rO45IAvyhqYJ01ihG6pHQ').then(($el) => {
        const text = $el.text();
        // console.log((text))
        expect(text).to.eq("With access to their credit, criminal, and eviction history, you’ll know how reliable they’ll be as a tenant.");
    });

    //check if image is displayed
    cy.get('[alt="find the right tenant"]')
        .should('be.visible')
        .and(($img) => {
            // "naturalWidth" and "naturalHeight" are set when the image loads
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })

    }
function invitationSent(){

    cy.url().should('include', 'onboarding/invite-success');

    //check if image is displayed
    cy.get('._21_WrH0R5vM2Ng_N7WC-wJ')
    .should('be.visible');


    cy.get('._2P5p5dCUGVvL3Z1K4UnmkR').then(($el) => {
        const text = $el.text();
        // console.log((text))
        expect(text).to.eq("Invitation Sent!");
    });
    
    cy.get('.PzMe7JEs9f2sHwcxzQhX4').then(($el) => {
        const text = $el.text();
        // console.log((text))
        expect(text).to.eq("They were also added to your list of leads. We will send you an email when they’ve completed the rental application.");
    });
    
    cy.get('[data-qa="onboarding-invite-success-page-button-done"]').then(($el) => {
        const text = $el.text().toUpperCase();
        expect(text).to.eq("DONE");
    });
    cy.get('._2X_Irl-V64mHgAub_AnCfI').eq(1).then(($el) => {
        const text = $el.text().toUpperCase();
        expect(text).to.eq("INVITE ANOTHER RENTER");
    });
    cy.get('.marketingImage_1yfz4by')
    .should('be.visible')
    .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
    })

    cy.get('.marketingSubtitle_1dvtw1g').then(($el) => {
        const text = $el.text().toUpperCase();
        expect(text).to.eq("TURBOTENANT MARKETING");
    });

    cy.get('.marketingTitle_4y0vvf').then(($el) => {
        const text = $el.text();
        expect(text).to.eq("Need to reach more renters?");
    });
    

    cy.get('.marketingNarrative_175h9ey').then(($el) => {
        const text = $el.text();
        expect(text).to.eq("Our landlords average 22 leads per property by using TurboTenant to post their rental property on dozens of listings sites.");
    });
    

    cy.get('#learn-more-btn').then(($el) => {
        const text = $el.text().toUpperCase();
        expect(text).to.eq("LEARN MORE");
    });
        }
function checkCreatedLead(){
    cy.url().should('include', 'owners/renters/leads');

    // cy.get('.leadName_1r8sgor').then(($el) => {
    //     const text = $el.text();


    //     expect(text).to.eq("TenantTenant Last");
    // });
}
function checkProperty(){
    cy.url().should('include', 'owners/properties');
    cy.get('.Px3UXi52kJ6n3Rt5orIM0').then(($el) => {
        const text = $el.text();

        expect(text.trim()).to.eq("682734 Colorado Drive, Apt. B");
    });
    cy.get('._3K6KauZZKurmA2RJ4W8J7Y').then(($el) => {
        const text = $el.text();
        expect(text.trim()).to.eq("Fort Collins, CA 80525");
    });
    cy.get('._26SpnefTHPPVIVBXJtTewa').eq(0).then(($el) => {
        const text = $el.text();
        expect(text).to.eq("Not Marketing");
    });

    cy.get('._1zTk5uFM9XUCdgLreZdILi').then(($el) => {
        const text = $el.text().toUpperCase();
        expect(text).to.eq("RENT:");
    });

    cy.get('._3mjxJEI-iVSamQKVUKQmg').eq(0).then(($el) => {
        const text = $el.text();
        console.log(text)
        expect(text).to.eq("$1200.00");
    });

    
    
    


}








module.exports = {
    inviteRenter,
    addPropertyScreening,
    addPropertyApplication,
    mailingAddress,
    invitationSent,
    checkCreatedLead,
    checkProperty
};