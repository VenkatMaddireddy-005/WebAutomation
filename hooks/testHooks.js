const { test } = require('@playwright/test');

test.beforeAll(async () => {
  console.log('🚀 Test Suite Started');
});

test.beforeEach(async ({ page }) => {
  console.log('➡️ Test Started');
  await page.goto('/');
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({
      path: `screenshots/${testInfo.title}.png`
    });
  }
  console.log(`⬅️ Test Finished: ${testInfo.status}`);
});

test.afterAll(async () => {
  console.log('🏁 Test Suite Finished');
});
