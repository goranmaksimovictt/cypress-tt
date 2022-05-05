# Cypress Automation Testing

POC (Proof of concepts) of cypress automation testing

## Run

```
npx cypress run --spec "cypress/integration/tests/onboarding*" - Run onboarding tests
--headed - Run in browser (default is headless)
--record - Save results in one file
 --spec - Choose which tests to run
 --key $CYPRESS_RECORD_KEY - to run on specific test dashboard dashboard (save key in environment variable ->8148a8af-6710-4448-acdc-50ba6812d0e1)
 --paralel - to run all tests in paralel
```

## Structure

```
/cypress
  - fixtures (Mock data for test cases)
  - integration (It contain all test files)
  - plugins (3'rd party plugins integration)
  - support (Create various custom commands and overwrite existing commands)
```

## References

[Official Documentation](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Cypress API](https://docs.cypress.io/api/api/table-of-contents.html)

[Cypress Plugins](https://docs.cypress.io/plugins/)

[Cypress Examples](https://docs.cypress.io/plugins/)
