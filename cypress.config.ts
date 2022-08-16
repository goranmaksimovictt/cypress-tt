import { defineConfig } from 'cypress'

export default defineConfig({
  baseApiUrl: 'http://localhost:8080',
  viewportWidth: 1440,
  viewportHeight: 800,
  defaultCommandTimeout: 40000,
  env: {
    TEST_OWNER_URL: 'https://stable-owner.turbotenant.com',
    TEST_RENTER_URL: 'https://stable-renter.turbotenant.com',
    TEST_API: 'https://stable-api.turbotenant.com',
    TEST_TIMEOUT: 400000,
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/test-output.xml',
    toConsole: true,
  },
  projectId: 'wuikeh',
  experimentalStudio: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://stable-owner.turbotenant.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  component: {
    setupNodeEvents(on, config) {},
    specPattern: 'src/**/*.test.{js,ts,jsx,tsx}',
  },
})
