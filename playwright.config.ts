import { defineConfig, devices } from '@playwright/test';

const testTarget = process.env.TEST_TARGET ?? 'mock';
if (testTarget !== 'mock' && testTarget !== 'live') {
  throw new Error(`TEST_TARGET must be either "mock" or "live", received "${testTarget}"`);
}

const useMockServer = testTarget === 'mock';

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
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
  ],
  use: {
    baseURL: process.env.BASE_URL ?? (useMockServer ? 'http://127.0.0.1:3000' : 'https://alo-holmes.github.io'),
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
  webServer: useMockServer
    ? {
        command: 'npm run mock:server',
        url: 'http://127.0.0.1:3000',
        reuseExistingServer: !process.env.CI,
        timeout: 10_000,
      }
    : undefined,
});
