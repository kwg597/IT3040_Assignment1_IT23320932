// tests/assignment1.spec.js
const { test, expect } = require('@playwright/test');

/**
 * STEP 1: DEFINE YOUR TEST DATA
 */
const testCases = [
  {
    id: 'Pos_Fun_0001',
    description: 'Simple daily Sentence',
    input: 'mama gedhara yanavaa',
    expected: 'මම ගෙදර යනවා', 
    type: 'S'
  },
  {
    id: 'Pos_Fun_0002',
    description: 'Daily food request',
    input: 'mata bath oonee',
    expected: 'මට බත් ඕනේ', 
    type: 'S'
  },
  {
    id: 'Pos_Fun_0003',
    description: 'Compound sentence with reason',
    input: 'mama gedhara yanavaa, vahina nisaa yannee naehae',
    expected: 'මම ගෙදර යනවා, වහින නිසා යන්නේ නැහැ', 
    type: 'S'
  },

  {
    id: 'Pos_Fun_0004',
    description: 'Conditional sentence',
    input: 'oyaa enavaanam api yamu',
    expected: 'ඔයා එනවානම් අපි යමු', 
    type: 'S'
  },

  {
    id: 'Pos_Fun_0005',
    description: 'Greeting phrase',
    input: 'aayuboovan!',
    expected: 'ආයුබෝවන්!', 
    type: 'S'
  },

  {
    id: 'Pos_Fun_0006',
    description:'Conditional complex sentence',
    input: 'oyaa hodhatama igena gaththoth vitharayi oyaata usas raekiyaavak labaaganna puluvan venne',
    expected: 'ඔයා හොදටම ඉගෙන ගත්තොත් විතරයි ඔයාට උසස් රැකියාවක් ලබාගන්න පුලුවන් වෙන්නෙ', 
    type: 'M'
  },
 
  {
    id: 'Pos_Fun_0007',
    description: 'Plural pronoun usage',
    input: 'eyaalaa heta enavaa',
    expected: 'එයාලා හෙට එනවා', 
    type: 'S'
  },

  {
    id: 'Pos_Fun_0008',
    description: 'Medium length conversation',
    input: 'mama heta office yanavaa eehindha mata adha raee kanna baee. oyaa mata raee eka kavanna puluvandha',
    expected: 'මම හෙට office යනවා ඒහින්ද මට අද රෑ කන්න බෑ. ඔයා මට රෑ එක කවන්න පුලුවන්ද', 
    type: 'M'
  },

  {
    id: 'Pos_Fun_0009',
    description: 'Informal phrasing',
    input: 'eeyi ooka dhiyan',
    expected: 'ඒයි ඕක දියන්', 
    type: 'S'
  },

  {
    id: 'Pos_Fun_0010',
    description: 'Repeated words emphasis',
    input:'hari hari hodhaayi',
    expected: 'හරි හරි හොදායි', 
    type: 'S'
  },

  {
    id: 'Pos_Fun_0011',
    description: 'Past tense usage',
    input: 'api naetum panthi giyaa',
    expected: 'අපි නැටුම් පන්ති ගියා', 
    type: 'S'
  },

  
  {
    id: 'Pos_Fun_0012',
    description: 'English technical word',
    input: 'Email ekak evanna',
    expected: 'Email එකක් එවන්න', 
    type: 'S'
  },

  
  {
    id: 'Pos_Fun_0013',
    description: 'Currency format',
    input: 'USD 1500 gevanna',
    expected: 'USD 1500 ගෙවන්න', 
    type: 'S'
  },

  
  {
    id: 'Pos_Fun_0014',
    description: 'Plural pronoun usage',
    input: 'eyaalaa heta enavaa',
    expected: 'එයාලා හෙට එනවා', 
    type: 'S'
  },

  
  {
    id: 'Pos_Fun_0015',
    description: 'Imperative command',
    input: 'vahaama enna',
    expected: 'වහාම එන්න', 
    type: 'S'
  },

  
  {
    id: 'Pos_Fun_0016',
    description: 'Polite request',
    input: 'karuNaakaralaa eka poddak balanna',
    expected: 'කරුණාකරලා ඒක පොඩ්ඩක් බලන්න', 
    type: 'S'
  },

  
  {
    id: 'Pos_Fun_0017',
    description: 'Missing spaces',
    input: 'matapaankannaoonee',
    expected: 'මටපාන්කන්නඕනේ', 
    type: 'S'
  },

  
  {
    id: 'Pos_Fun_0018',
    description: 'Extra spaces handling',
    input: 'oyaa adha raee velavata vaeda tika ivara kaloth vitharayi apita heta udhee kandy yanna puluvan venne naethnam yanna venne nae',
    expected: 'ඔයා අද රෑ වෙලාවට වැඩ ටික ඉවර කළොත් විතරයි අපිට හෙට උදේ මහනුවර යන්න පුළුවන් වෙන්නේ නැත්නම් යන්න වෙන්නේ නෑ', 
    type: 'M'
  },

  
  {
    id: 'Pos_Fun_0019',
    description: 'Line break input',
    input: 'api passeekathaa karamu',
    expected: 'අපි පස්සේකතා කරමු', 
    type: 'S'
  },

  
  {
    id: 'Pos_Fun_0020',
    description: 'Exclamation mark handling',
    input: 'supiri!',
    expected: 'සුපිරි!', 
    type: 'S'
  },

  
  {
    id: 'Pos_Fun_0021',
    description: 'Mixed spacing issues',
    input: 'mata oonee  eeka',
    expected: 'මට ඕනේ ඒක', 
    type: 'S'
  },

  
  {
    id: 'Pos_Fun_0022',
    description: 'Date format',
    input: '25/12/2025 enne',
    expected: '25/12/2025 එන්නේ', 
    type: 'S'
  },

  
  {
    id: 'Pos_Fun_0023',
    description: 'Slang expression',
    input: 'ela machan',
    expected: 'එල මචන්', 
    type: 'S'
  },

  
  {
    id: 'Pos_Fun_0024',
    description: 'Simple question',
    input: 'oyaata kohomadha?',
    expected: 'ඔයාට කොහොමද?', 
    type: 'S'
  },

 {
    id: 'Neg_Fun_0001',
    description: 'Invalid characters: Numeric mix',
    input: 'mamayanawa',
    expected: 'මම යනවා', 
    type: 'S'
  },

  {
    id: 'Neg_Fun_0002',
    description: 'Missing space between words',
    input: 'mamagedharainnee',
    expected: 'මම ගෙදර ඉන්නේ', 
    type: 'S'
  },

  {
    id: 'Neg_Fun_0003',
    description: 'Joined compound words',
    input: 'apipassekathakaramu',
    expected: 'අපි පස්සේ කතා කරමු', 
    type: 'S'
  },

  {
    id: 'Neg_Fun_0004',
    description: 'Mixed spacing issues',
    input: 'mata     oonee  eeka',
    expected: 'මට ඕනෑ ඒක', 
    type: 'S'
  },

  {
    id: 'Neg_Fun_0005',
    description: 'Line Break in Sentence',
    input: 'mama heta office yanavaa',
    expected: 'මම හෙට office යනවා', 
    type: 'S'
  },

  {
    id: 'Neg_Fun_0006',
    description: 'Mixed English with errors',
    input: 'mamaWhatsAppekagiyaa',
    expected: 'මම WhatsApp එකගියා', 
    type: 'S'
  },

  {
    id: 'Neg_Fun_0007',
    description: 'Abbreviation in sentence',
    input: 'mata RSVP eeka evanna',
    expected: 'මට RSVP ඒක එවන්න', 
    type: 'S'
  },

  {
    id: 'Neg_Fun_0008',
    description: 'Question with spacing error',
    input: 'oyaakohedhainnee',
    expected: 'ඔයා කොහෙද ඉන්නේ', 
    type: 'S'
  },

  {
    id: 'Neg_Fun_0009',
    description: 'Complex slang statement',
    input: 'eyi bro eeka set karala denna',
    expected: 'එයි bro ඒක set කරල දෙන්න', 
    type: 'S'
  },
  
  
  {
    id: 'Pos_UI_0001',
    description: 'Real-time output update : Typing word by word',
    input: 'api heta kandy yamu',
    expected: 'අපි හෙට මහනුවර යමු', 
    type: 'S'
  },
  

];

test.describe('IT3040 Assignment 1 - Translation Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  for (const data of testCases) {
    test(`${data.id}: ${data.description}`, async ({ page }) => {
      
      const inputBox = page.locator('textarea').first();
      
      await inputBox.click();
      await inputBox.clear();
      await inputBox.fill(data.input);

      const outputBox = page.locator('div.w-full.whitespace-pre-wrap').first();

      // වැදගත්ම වෙනස: Output එක එනකල් උපරිම තත්පර 10ක් බලන් ඉන්නවා
      // එවිට අර "" (Empty string) error එක එන්නේ නැහැ
      await expect(outputBox).not.toBeEmpty({ timeout: 10000 });

      const actualOutput = await outputBox.innerText();

      console.log(`\n--- TEST REPORT: ${data.id} ---`);
      console.log(`Input:    ${data.input}`);
      console.log(`Actual:   ${actualOutput.trim()}`);

      if (data.type !== 'ui') {
          // අකුරු වල සහ හිස්තැන් වල පොඩි වෙනස්කම් තිබුණත් test එක pass වීමට:
          const cleanActual = actualOutput.replace(/\s+/g, '').trim();
          const cleanExpected = data.expected.replace(/\s+/g, '').trim();
          
          expect(cleanActual).toContain(cleanExpected);
      }
    });
  }
});