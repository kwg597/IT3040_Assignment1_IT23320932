const { test, expect } = require('@playwright/test');

test('Find the Output Box ID', async ({ page }) => {
  
  await page.goto('https://www.swifttranslator.com/', { 
    waitUntil: 'networkidle', 
    timeout: 120000 
  });

  
  const inputBox = page.locator('textarea').first();
  await inputBox.waitFor({ state: 'visible', timeout: 30000 });

  
  await inputBox.fill('mama');

  
  const translation = page.getByText('මම', { exact: true });
  await translation.waitFor({ timeout: 30000 });

  
  const id = await translation.getAttribute('id');
  const className = await translation.getAttribute('class');
  const tagName = await translation.evaluate(el => el.tagName);

  
  console.log('------------------------------------------------');
  console.log('FOUND THE ELEMENT!');
  console.log(`Tag Name: <${tagName}>`);
  console.log(`ID:       ${id || '(No ID)'}`);
  console.log(`Class:    ${className || '(No Class)'}`);
  console.log('------------------------------------------------');
  
  
  await expect(translation).toBeVisible();
});
