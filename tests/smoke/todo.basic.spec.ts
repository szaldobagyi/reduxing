import { test, expect } from '@playwright/test';

const TODOS_URL = 'http://localhost:3000/';

test('basic test', async ({ page }) => {
    await page.goto(TODOS_URL);
    const title = await page.title();
    await expect(title).toContain('Redux Todos Example');
});

