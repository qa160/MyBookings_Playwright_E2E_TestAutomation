// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './Tests',
    timeout: 50 * 1000,
    expect: {
        timeout: 5000   //Maximum time expect() should wait for the condition to be met.
    },
    fullyParallel: false,  //Run tests in files in parallel
    reporter: [['html', { outputFolder: 'TestReport' }]], //HTML report will be saved in TestReport folder
    retries: 2,

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: {
                browserName: `chromium`,  // Or 'firefox', 'webkit'. Configure the browser to use.
                baseURL: 'https://my-bookings-app.com/login',
                headless: false, // browser mode
                viewport: { width: 1280, height: 720 }, //Browser height and width
                browserName: 'chromium',
                screenshot: `only-on-failure`,
                video: `retain-on-failure`,
                trace: `retain-on-failure`,
            },
        },
        // Add more projects for other browsers if needed
    ],
});



