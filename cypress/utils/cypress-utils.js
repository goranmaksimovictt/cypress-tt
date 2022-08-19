/* eslint-disable no-unused-vars, cypress/no-assigning-return-values */

// const { visitEachChild } = require("typescript");

const generateTestEmail = () =>
  `test+${Date.now()}${Math.floor(Math.random() * 1000)}@turbotenant.com`

function focusAndReplace(selector, text) {
  focusAndClean(selector)
  cy.get(selector).type(text)
}
function focusAndClean(selector) {
  cy.get(selector).clear()
}
function selectOption(selector, options) {
  const selectElement = cy.get(selector)
  selectElement.select(options)
}

function clickElement(selector) {
  cy.get(selector).click()
}

function checkElement(selector) {
  cy.get(selector).check()
}

function randomText(length) {
  let text = ""
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}
function loginOwner({ email, password }) {
  const url = Cypress.env("TEST_OWNER_URL") + "/auth/login"

  console.log("url")
  console.log(url)

  cy.visit(url, { responseTimeout: 300000 })

  focusAndReplace("#user", email)

  focusAndReplace("#password", password)

  clickElement("#login_submit")
}

module.exports = {
  generateTestEmail,
  focusAndReplace,
  focusAndClean,
  selectOption,
  clickElement,
  randomText,
  checkElement,
  loginOwner
}
