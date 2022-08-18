/* eslint-disable no-unused-vars, no-undef, cypress/no-assigning-return-values */

/**
 * This test page represents the url https://dev-owner.turbotenant.com/owners/leases/view/<leaseId>
 */

const utils = require("../../../utils/cypress-utils")

module.exports = () => {
  const getLeaseStatus = () => {
    const leaseStatusTitle = cy.get("#lease-view-status").getText()
    return leaseStatusTitle
  }

  const goToAddRenters = () => {
    utils.clickElement("#add-renters-btn")
  }

  const goToEditLease = () => {
    utils.clickElement("#edit-lease-btn")
  }

  const goToUploadDocument = () => {
    utils.clickElement("#upload-document-action")
  }

  const goToSignMyDoc = () => {
    utils.clickElement("#sign-doc-lease-btn")

    cy.get("#get-your-doc-signed")
  }

  const getFirstDocTitle = async () => {
    const timeout = Number(process.env.TEST_TIMEOUT || "1800000")
    await page.waitForSelector("#lease-view-status", { timeout })

    const documentsAdded = await page.$x(
      "//span[contains(@id, 'document-title-')]"
    )

    const documentTitle = await utils.evalProp(
      page,
      documentsAdded[0],
      "innerText"
    )
    return documentTitle.toLowerCase()
  }

  const goToPaymentsTab = async timeout => {
    await utils.waitForAndClickElement("#payments", page)
    await utils.waitUntilLoadingDisappears(page, timeout)
  }

  const startPaymentsSetup = async timeout => {
    await utils.waitForAndClickElement("#set_up_payments", page)
    await utils.waitUntilLoadingDisappears(page, timeout)
  }

  const goToCreateCharge = async () => {
    await utils.waitForAndClickElement("#create_charge", page)
    await utils.waitUntilLoadingDisappears(page)
  }

  const getFirstSignatureRequestId = async () => {
    const eSignatureRequestList = await page.$$(".signature-request-list-item")

    let signatureRequestId = await utils.evalProp(
      page,
      eSignatureRequestList[0],
      "id"
    )
    signatureRequestId = signatureRequestId.slice("signature-request-".length)
    return signatureRequestId
  }

  const getFirstSignatureRequestRenterEmail = async () => {
    const eSignatureRequestList = await page.$$(
      ".signer-request-item-renter-email"
    )
    const email = await utils.evalProp(
      page,
      eSignatureRequestList[0],
      "innerText"
    )
    return email
  }

  const deleteLease = async () => {
    await utils.waitForAndClickElement("#delete-this-lease-btn", page)
    await utils.waitUntilLoadingDisappears(page)
  }

  return {
    getLeaseStatus,
    goToAddRenters,
    goToEditLease,
    goToUploadDocument,
    getFirstDocTitle,
    goToPaymentsTab,
    startPaymentsSetup,
    goToCreateCharge,
    goToSignMyDoc,
    getFirstSignatureRequestId,
    getFirstSignatureRequestRenterEmail,
    deleteLease
  }
}
