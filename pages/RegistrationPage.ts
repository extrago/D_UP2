import { Page, Locator } from '@playwright/test';

export class RegistrationPage {
  private readonly page: Page;
  private readonly signupNameInput: Locator;
  private readonly signupEmailInput: Locator;
  private readonly signupButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupNameInput = page.locator('[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com/login');
  }

  async register(username: string, email: string) {
    await this.signupNameInput.fill(username);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }
}