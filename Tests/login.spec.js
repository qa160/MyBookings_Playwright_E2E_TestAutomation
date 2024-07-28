import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/Login.page';
const { userCredentials } = require('../TestData/LoginData');

test.describe('Login Tests', () => {

    test('Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.fillCredentials(userCredentials.username, userCredentials.password);
        await loginPage.clickLogin();
        await loginPage.verifyLoginSuccess();
    });

    test('Login with invalid credentials', async ({ page }) => {
        // Navigate to login page
        // Fill in invalid username and password
        // Click login button
        // Verify login isn't successful
    });

    test('Forgot Password', async ({ page }) => {
        // Verify forgot password link functionality
    });

});