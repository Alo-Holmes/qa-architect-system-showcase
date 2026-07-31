import { expect, type Page } from '@playwright/test';

export async function openPortfolio(page: Page) {
  await page.goto('/');
  await expect(page.locator('main')).toBeVisible();
}

export async function expectPageContains(page: Page, expectedText: RegExp | string) {
  const bodyText = (await page.locator('body').innerText()).toLowerCase();
  const matchText = typeof expectedText === 'string' ? expectedText.toLowerCase() : expectedText;

  if (typeof expectedText === 'string') {
    expect(bodyText).toContain(matchText);
  } else {
    expect(bodyText).toMatch(matchText);
  }
}
