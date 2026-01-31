// tests/find_id.spec.js
const { test, expect } = require('@playwright/test');

test('Find the Output Box ID', async ({ page }) => {
  // 1. Go to the site
  await page.goto('https://www.swifttranslator.com/');

  // 2. Type "mama" into the first box (Input)
  await page.locator('textarea').first().fill('mama');

  // 3. Wait for the translation "මම" to appear on screen
  // This helps us find WHERE the text is going
  const translation = page.getByText('මම', { exact: true });
  await translation.waitFor();

  // 4. Get the ID and Class of that element
  const id = await translation.getAttribute('id');
  const className = await translation.getAttribute('class');
  const tagName = await translation.evaluate(el => el.tagName);

  // 5. Print it to the terminal so we can see it
  console.log('------------------------------------------------');
  console.log('FOUND THE ELEMENT!');
  console.log(`Tag Name: <${tagName}>`);
  console.log(`ID:       ${id || '(No ID)'}`);
  console.log(`Class:    ${className || '(No Class)'}`);
  console.log('------------------------------------------------');
});