const { generateTestEmail } = require("../../utils/cypress-utils")

const defaultLead = () => {
  return {
    title: "Test Lead",
    first_name: "TestFirst",
    last_namee: "Test Last",
    email: generateTestEmail(),
    phone: "123456789",
    source: "MANUAL",
    applied: "CONTACTED"
  }
}

module.exports = {
  defaultLead
}
