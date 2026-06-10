// ★ おまけ:Playwright E2E の例(Aki さんの本職スキルと接続する練習用)
// 使い方:
//   npm i -D @playwright/test && npx playwright install chromium
//   別ターミナルで npm start を起動したまま → npx playwright test
import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:4200';

test('商品一覧から詳細へ遷移できる', async ({ page }) => {
  await page.goto(`${BASE}/products`);
  await expect(page.locator('[data-test-product-card]')).toHaveCount(3);

  await page.getByRole('link', { name: '可変ダンベル 24kg' }).click();
  await expect(page).toHaveURL(/\/products\/2/);
  await expect(page.getByRole('heading', { name: '可変ダンベル 24kg' })).toBeVisible();
});

test('いいねボタンで件数が増える', async ({ page }) => {
  await page.goto(`${BASE}/products/1`);
  const like = page.locator('[data-test-like]');
  await like.click();
  await like.click();
  await expect(like).toContainText('いいね 2');
});
