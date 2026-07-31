import { type Locator, type Page } from '@playwright/test';

export class PortfolioPage {
  readonly page: Page;
  readonly heroSection: Locator;
  readonly navigationLinks: Locator;
  readonly telemetrySection: Locator;
  readonly cvDownloadLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroSection = page.locator('main').first();
    this.navigationLinks = page.locator('nav a, header a');
    this.telemetrySection = page.locator('section').filter({ hasText: /telemetry|status|build/i }).first();
    this.cvDownloadLink = page.locator('a[href*=".pdf"], a[href*="cv" i]').first();
  }

  async goto() {
    await this.page.goto('/');
  }

  async openSection(sectionName: string) {
    await this.page.getByRole('link', { name: new RegExp(sectionName, 'i') }).click();
  }
}
