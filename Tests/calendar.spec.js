const { test, expect } = require('@playwright/test');
const { userCredentials } = require('../TestData/LoginData');
const CalendarPage = require('../Pages/Calendar.page');
import LoginPage from '../Pages/Login.page';

test.describe('Calendar Tests', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.fillCredentials(userCredentials.username, userCredentials.password);
        await loginPage.clickLogin();
    });

    test('Navigate to the calendar page', async ({ page }) => {

        // Add assertions to verify the calendar page is displayed
    });

});
