## E2E Tests for MyBookings web application using Playwright and JavaScript

The E2E tests are written using Page Object Model framework wherein each webpage represents a class.
They are located under the 'Pages' folder.

All the test scripts are located under the 'Tests' folder.

This is a sample project and will not work after cloning.

#### Assumptions

The baseURL in the playwright.config.js

#### Improvements

Credentials can be stored in environment variables or configuration files.

#### Reason behind my choice of technologies

1. Playwright is fast, reliable and open source.
2. It supports multiple programming languages and I chose JS because I have used it before at my workplace for implementing Cypress.
3. It provides wider coverage for cross-browser testing.
4. We can use it to record the user flow and it will generate code which is very helpful for new starters.
5. The documentation is good.
6. The tests are easy to debug.
7. The reporting capabilities are also good.

#### The users of automation framework

People who have worked in the UI automation space using any other tools like Selenium with Specflow/Cucumber OR Cypress would find it easy to pick up and start scripting basic scenarios.
