/* eslint-disable no-unused-vars, no-undef */

const cypressUtils = require("../../../utils/cypress-utils")
const fixtureUtils = require("../../../utils/fixture-utils")
const fixturesData = require("../../../fixtures/esign_fixture")

// const { encodeId } = require('../test-utils');
const LeasesIndexTestPage = require("../leases/LeasesIndexTestPage")
const LeaseViewTestPage = require("../leases/LeaseViewTestPage")
// const dataFromServer =  fixtureUtils.getOwnerFixtures(fixturesData);
// const ESignHowItWorksTestPage = require('./ESignHowItWorksTestPage');
// const StripeElementTestPage = require('../common-pages/StripeElementTestPage');
// const ESignUploadDocsTestPage = require('./ESignUploadDocsTestPage');
// const ESignAddSignersTestPage = require('./ESignAddSignersTestPage');
// const HelloSignTestIframe = require('./HelloSignTestIframe');
// const ESignSuccessTestPage = require('./ESignSuccessTestPage');
// const HelloSignRenterSignatureTestPage = require('./HelloSignRenterSignatureTestPage');
// const ESignRenterWelcomeTestPage = require('./ESignRenterWelcomeTestPage');
// const cypress = require('cypress');

//  const promisify = require("cypress-promise")

// const getOwnerFixtures = async () => {
//  // Grab fixtures data for this test and then merge with default values.
//  const fixtures_data = fixturesData.data();

//  // Now we have all artifacts created in DB and we can start testing.
//  const serverResponse = fixtureUtils.createFixtures(fixtures_data);
//  dataFromServer = serverResponse.data;
// }

describe("E-sign", () => {
  // before("Creating e-sign fixtures", () => {
  //   const dataFromServer =  fixtureUtils.getOwnerFixtures(fixturesData);
  // })
  let dataFromServer

  before(async () => {
    cy.intercept("*", req => {
      req.headers["Accept-Encoding"] = "gzip, deflate"
    })

    dataFromServer = await fixtureUtils.getOwnerFixtures(fixturesData.data())
  })

  // write JSON string to a file
  // cy.writeFile('cypress/fixtures/esign_fixture_created.json', dataFromServer, (err) => {
  //   if (err) {
  //       throw err;
  //   }
  //   console.log("JSON data is saved.");
  // });

  //         cy.fixture('esign_fixture_created').then(function (data) {
  //           this.data = data;
  //         })
  //       })

  beforeEach(function () {
    // Cypress.Cookies.preserveOnce('connect.sid')
    //     cy.restoreLocalStorage();

    // let dataFromServerJson = JSON.parse(dataFromServer)
    console.log("data from server")
    console.log(dataFromServer)

    let owner1Obj = dataFromServer.owner1
    cypressUtils.loginOwner({
      email: owner1Obj.rawData["email"],
      password: owner1Obj.rawData["password"]
    })

    //  let owner1 = dataFrom[owner1]

    //  cy.visit('/');
    //  cy.intercept('*');
  })

  afterEach(() => {
    //  cy.saveLocalStorage();
  })

  // it("Landlord logs in",  () => {

  // let owner1Obj = dataFromServer.find(obj => obj.refName === 'owner1')
  // cypressUtils.loginOwner({user: owner1Obj.data['email'],password: owner1Obj.data['password']});
  // cypressUtils.checkElement('[data-qa="desktop-nav-item-account"]');

  // });

  it("Go to lease", () => {
    const leasesIndexPage = LeasesIndexTestPage()
    const leaseViewPage = LeaseViewTestPage()

    leasesIndexPage.goToLeasesIndex()

    const titleText = leasesIndexPage.checkTitle()
    assert.equal(titleText, "Leases")

    const leasesCount = leasesIndexPage.getLeasesListCount()
    assert.equal(leasesCount, 1)

    leasesIndexPage.manageLeaseById(
      encodeId("Lease", dataFromServer["lease1"].modelData["id"])
    )

    const status = leaseViewPage.getLeaseStatus()
    assert.equal(status, "ENDING_SOON LEASE")
  })
})
// const tests = [
//   {
//     title: 'before',
//     test: async function() {
//       console.log(`>>>>>>>>> Initializing Test Suite: ${title} <<<<<<<<<<<<`);
//       console.log(`${testName} STEP: ${this.title}.`);

//       ({ browser, page, recorder, videoFileName } = await init(
//         testName,
//         headless,
//       ));

//       // Grab fixtures data for this test and then merge with default values.
//       const fixtures_data = fixturesData.data();

//       // Now we have all artifacts created in DB and we can start testing.
//       const serverResponse = await fixtureUtils.createFixtures(fixtures_data);
//       dataFromServer = serverResponse.data;
//     },
//   },

//   {
//     title: 'LogIn as Owner',
//     test: async function() {
//       console.log(`${testName} STEP: ${this.title}.`);

//        loginOwner({
//         user: dataFromServer['owner1'].rawData['email'],
//         password: dataFromServer['owner1'].rawData['password'],
//       });
//     },
//   },

//   {
//     title: 'Go to lease',
//     test: async function() {
//       console.log(`${testName} STEP: ${this.title}.`);

// const leasesIndexPage = LeasesIndexTestPage(page);
// const leaseViewPage = LeaseViewTestPage(page);

// await leasesIndexPage.goToLeasesIndex();

// const titleText = await leasesIndexPage.getTitle();
// assert.equal(titleText, 'Leases');

// const leasesCount = await leasesIndexPage.getLeasesListCount();
// assert.isAbove(leasesCount, 0);

// await leasesIndexPage.manageLeaseById(
//   encodeId('Lease', dataFromServer['lease1'].modelData['id']),
// );

// const status = await leaseViewPage.getLeaseStatus();
// assert.equal(status, 'ENDING_SOON LEASE');
//     },
//   },

//   {
//     title: 'Start signing process',
//     test: async function() {
//       console.log(`${testName} STEP: ${this.title}.`);

//       const leaseViewPage = LeaseViewTestPage(page);
//       const howItWorksPage = ESignHowItWorksTestPage(page);
//       const stripeElements = StripeElementTestPage(page);

//       await leaseViewPage.goToSignMyDoc();
//       await howItWorksPage.clickGetStarted();

//       // close the modal that promote subscription
//       await waitForAndClickElement('#one-time-payment', page);

//       await stripeElements.payFeeWithStripe();
//     },
//   },

//   {
//     title: 'Add documents',
//     test: async function() {
//       console.log(`${testName} STEP: ${this.title}.`);

//       const eSignUploadDocsPage = ESignUploadDocsTestPage(page);

//       await eSignUploadDocsPage.waitForPage();
//       await eSignUploadDocsPage.uploadADoc();
//     },
//   },

//   {
//     title: 'Select signers and message',
//     test: async function() {
//       console.log(`${testName} STEP: ${this.title}.`);

//       const eSignAddSignersPage = ESignAddSignersTestPage(page);

//       const title = await eSignAddSignersPage.getTitle();
//       assert.equal(title, 'Who needs to sign the document?');

//       await eSignAddSignersPage.addSigners();
//     },
//   },

//   {
//     title: 'Place field to sign.',
//     test: async function() {
//       console.log(`${testName} STEP: ${this.title}.`);

//       const helloSignIframe = HelloSignTestIframe(page);
//       const eSignSuccessPage = ESignSuccessTestPage(page);

//       await helloSignIframe.placeSignatures();

//       const title = await eSignSuccessPage.getTitle();
//       assert.equal(title, 'Signatures Requested!');
//     },
//   },

//   {
//     title: 'Success page',
//     test: async function() {
//       console.log(`${testName} STEP: ${this.title}.`);

//       const eSignSuccessPage = ESignSuccessTestPage(page);
//       const leaseViewPage = LeaseViewTestPage(page);

//       await eSignSuccessPage.clickSoundsGood();

//       const status = await leaseViewPage.getLeaseStatus();
//       assert.equal(status, 'ENDING_SOON LEASE');

//       renterEmail = await leaseViewPage.getFirstSignatureRequestRenterEmail();

//       signatureRequestId = await leaseViewPage.getFirstSignatureRequestId();
//     },
//   },

//   {
//     title: 'Renter welcome page',
//     test: async function() {
//       console.log(`${testName} STEP: ${this.title}.`);

//       pageRenter = await browser.newPage();
//       ({ recorderRenter, videoFileNameRenter } = await initRenterPage(
//         pageRenter,
//         testName,
//       ));

//       const esignRenterWelcomeTestPage = ESignRenterWelcomeTestPage(
//         pageRenter,
//       );

//       await esignRenterWelcomeTestPage.gotoWelcomePage(
//         renterEmail,
//         signatureRequestId,
//       );
//     },
//   },

//   {
//     title: 'Sign the document as a renter',
//     test: async function() {
//       console.log(`${testName} STEP: ${this.title}.`);

//       const helloSignRenterSignature = HelloSignRenterSignatureTestPage(
//         pageRenter,
//       );

//       await helloSignRenterSignature.signDocument();
//     },
//   }
