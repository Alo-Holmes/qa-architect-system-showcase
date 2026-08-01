import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
<<<<<<< HEAD
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }]
  ],
=======
  reporter: [['list'], ['html', { open: 'never' }]],
  webServer: {
    command: 'node server/mockServer.js',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },
>>>>>>> fix/playwright-live-site-tests
  use: {
    baseURL: process.env.BASE_URL ?? 'http://127.0.0.1:3000',
    headless: true,
    ignoreHTTPSErrors: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run mock:server',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 10_000,
  },
});
