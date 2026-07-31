import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../src/pages/portfolioPage';

test.describe('portfolio journeys', () => {
  test('shows the core profile and experience content', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await portfolio.goto();

    await expect(page.getByRole('heading', { name: /professional profile/i })).toBeVisible();
    await expect(page.getByText(/experienced software engineer/i)).toBeVisible();
    await expect(page.getByRole('heading', { name: /career history/i })).toBeVisible();
  });

  test('provides CV download and contact links', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await portfolio.goto();

    await expect(page.getByRole('link', { name: /download cv/i })).toHaveAttribute('href', '/cv.pdf');
    await expect(page.getByRole('link', { name: /github/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /linkedin/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /whatsapp/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /email/i })).toBeVisible();
  });

  test('renders telemetry health information', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await portfolio.goto();

    await expect(page.getByText(/telemetry health/i)).toBeVisible();
    await expect(page.getByText(/build status: healthy/i)).toBeVisible();
    await expect(page.getByText(/last check:/i)).toBeVisible();
  });
});
