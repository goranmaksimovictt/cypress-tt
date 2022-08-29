/* eslint-disable cypress/no-assigning-return-values, no-unused-vars, no-undef  */

/**
 * This test page represents the url https://dev-owner.turbotenant.com/owners/leases
 */

const utils = require("../../../utils/cypress-utils")

module.exports = () => {
  const goToLeasesIndex = () => {
    // let url = Cypress.env('TEST_OWNER_URL')+'/owners/leases'
    //  cy.visit(url);
    utils.clickElement('[data-qa="desktop-nav-item-leases"]')
  }

  const checkTitle = () => {
    cy.get("#leases-index-title").should("have.text", "Leases")
  }

  const searchLease = leaseSuffix => {
    cy.get("#searchbox")
    utils.focusAndReplace("#searchbox", `Lease ${leaseSuffix}`)
  }

  const getLeasesListCount = () => {
    const listContainer = cy.get("#leases-list")

    let countOfElements = 0
    cy.get("#leases-list").then($elements => {
      countOfElements = $elements.length
    })

    console.log(countOfElements)

    return countOfElements
  }

  const goToAddLease = () => {
    cy.get("#add-lease-btn")
    const addLeaseBtn = cy.get("#add-lease-btn")
    addLeaseBtn.click()
  }

  const manageLeaseById = leaseId => {
    expect(leaseId).to.exist
    cy.get('[data-qa="manage-lease-item"]')
    const manageLeaseBtn = cy.get(`[id="manage-lease-item-${leaseId}"]`)
    manageLeaseBtn.click()
  }

  const manageFirstLease = async () => {
    await page.waitForSelector('[data-qa="manage-lease-item"]')
    const manageLeaseBtnList = await page.$$('[data-qa="manage-lease-item"]')
    expect(manageLeaseBtnList.length).to.be.above(0)

    const manageLeaseBtn = manageLeaseBtnList[0]
    await manageLeaseBtn.click()
    await utils.waitUntilLoadingDisappears(page)
  }

  const editTenant = async tenantId => {
    expect(tenantId).to.exist
    await page.waitForSelector(`[id="edit-tenant-${tenantId}"]`)
    const editTenantdBtn = await page.$(`[id="edit-tenant-${tenantId}"]`)
    await editTenantdBtn.click()
  }

  const waitAndCloseRemoveTenantWarnModal = async () => {
    await page.waitForSelector("#tenant-can-not-be-removed")
    const closeRemoveTenantBtn = await page.$("#close-remove-tenant")
    await closeRemoveTenantBtn.click()
    await utils.waitUntilElementDisappears(page, "#close-remove-tenant", 3)
  }
  const convertBackToApplicant = async () => {
    await page.waitForSelector("#CONVERT_TO_APPLICANT")
    const convertBackToApplicantBtn = await page.$("#CONVERT_TO_APPLICANT")
    await convertBackToApplicantBtn.click()
    const removeTenantBtn = await page.$("#remove_tenant")
    await removeTenantBtn.click()
    await utils.waitUntilLoadingDisappears(page)
  }
  const archiveTenant = async () => {
    await page.waitForSelector("#MOVE_TO_PAST")
    const convertBackToApplicantBtn = await page.$("#MOVE_TO_PAST")
    await convertBackToApplicantBtn.click()
    const removeTenantBtn = await page.$("#remove_tenant")
    await removeTenantBtn.click()
    await utils.waitUntilLoadingDisappears(page)
  }

  return {
    goToLeasesIndex,
    checkTitle,
    searchLease,
    getLeasesListCount,
    goToAddLease,
    manageLeaseById,
    manageFirstLease,
    editTenant,
    waitAndCloseRemoveTenantWarnModal,
    convertBackToApplicant,
    archiveTenant
  }
}
