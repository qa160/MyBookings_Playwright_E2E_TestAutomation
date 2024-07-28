const { test, expect } = require('@playwright/test');
import LoginPage from '../Pages/Login.page';
//const LoginPage = require('../Pages/Login.page');
const CalendarPage = require('../Pages/Calendar.page');
const AppointmentPage = require('../Pages/Appointment.page');
const { userCredentials } = require('../TestData/LoginData');
const { appointmentDetails } = require('../TestData/AppointmentData');


test.describe('Appointment Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.fillCredentials(userCredentials.username, userCredentials.password);
        await loginPage.clickLogin();
        await loginPage.verifyLoginSuccess();
    });

    test('Create a new appointment', async ({ page }) => {
        const calendarPage = new CalendarPage(page);
        await calendarPage.createNewAppointment();

        const appointmentPage = new AppointmentPage(page);
        const appointmentData = (appointmentDetails.appointmentName, appointmentDetails.date, appointmentDetails.time); // Fill in appointment details
        await appointmentPage.createAppointment(appointmentData);
        await appointmentPage.verifyAppointmentCreated(appointmentData);
        // Add assertions to verify the appointment is saved
    });

    test('View an appointment', async ({ page }) => {

    });

    test('Edit an appointment', async ({ page }) => {

    });

    test('Delete an appointment', async ({ page }) => {

    });

});
