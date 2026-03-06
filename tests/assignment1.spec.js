const { test, expect } = require('@playwright/test');

const testCases = [
  { id: 'Pos_Fun_0001', input: 'mama gedhara yanavaa', expected: 'මම ගෙදර යනවා' },
  { id: 'Pos_Fun_0002', input: 'mata bath oonee', expected: 'මට බත් ඕනේ' },
  { id: 'Pos_Fun_0003', input: 'mama gedhara yanavaa, vahina nisaa yannee naehae', expected: 'මම ගෙදර යනවා, වහින නිසා යන්නේ නැහැ' },
  { id: 'Pos_Fun_0004', input: 'oyaa enavaanam api yamu', expected: 'ඔයා එනවානම් අපි යමු' },
  { id: 'Pos_Fun_0005', input: 'aayuboovan!', expected: 'ආයුබෝවන්!' },
  { id: 'Pos_Fun_0006', input: 'oyaa hodhatama igena gaththoth vitharayi oyaata usas raekiyaavak labaaganna puluvan venne', expected: 'ඔයා හොදටම ඉගෙන ගත්තොත් විතරයි ඔයාට උසස් රැකියාවක් ලබාගන්න පුලුවන් වෙන්නෙ' },
  { id: 'Pos_Fun_0007', input: 'eyaalaa heta enavaa', expected: 'එයාලා හෙට එනවා' },
  { id: 'Pos_Fun_0008', input: 'mama heta office yanavaa eehindha mata adha raee kanna baee. oyaa mata raee eka kavanna puluvandha', expected: 'මම හෙට office යනවා ඒහින්ද මට අද රෑ කන්න බෑ. ඔයා මට රෑ එක කවන්න පුලුවන්ද' },
  { id: 'Pos_Fun_0009', input: 'eeyi ooka dhiyan', expected: 'ඒයි ඕක දියන්' },
  { id: 'Pos_Fun_0010', input: 'hari hari hodhaayi', expected: 'හරි හරි හොදායි' },
  { id: 'Pos_Fun_0011', input: 'api naetum panthi giyaa', expected: 'අපි නැටුම් පන්ති ගියා' }
];

test.describe('IT3040 Assignment 1 - Translation Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    
    await page.goto('https://www.swifttranslator.com/', { 
      waitUntil: 'networkidle', 
      timeout: 120000 
    });
  });

  for (const data of testCases) {
    test(`${data.id}: ${data.input}`, async ({ page }) => {
      
      const inputBox = page.locator('textarea').first();
      
      
      await inputBox.waitFor({ state: 'visible', timeout: 30000 });
      
      await inputBox.fill(data.input);

      
      const outputBox = page.locator('div.w-full.whitespace-pre-wrap').first();
      await expect(outputBox).not.toBeEmpty({ timeout: 20000 });

      const actualOutput = await outputBox.innerText();

      
      const cleanActual = actualOutput.replace(/\s+/g, '').trim();
      const cleanExpected = data.expected.replace(/\s+/g, '').trim();

      console.log(`Test ID: ${data.id} | Status: Running`);
      expect(cleanActual).toContain(cleanExpected);
    });
  }
});
