export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username-input');
    this.passwordInput = page.locator('#password-input');
    this.loginButton = page.locator('#login-button');
  }

  async navigate() {
    await this.page.goto('/');  //this will open the baseURL configured in playwright config file
  }

  async fillCredentials(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
    // Implement logic to verify successful login
  }
}