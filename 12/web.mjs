import playwright from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await playwright.chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.melon.com/chart/index.htm');

  const songs = await page.$$eval('.lst50, .lst100', (elements) => {
    return elements.map((element) => {
      const rank = element.querySelector('.rank').innerText.trim();
      const title = element.querySelector('.ellipsis.rank01').innerText.trim();
      const artist = element.querySelector('.ellipsis.rank02').innerText.trim();
      const album = element
        .querySelector('.ellipsis.rank03 a')
        .innerText.trim();

      return { rank, title, artist, album };
    });
  });

  await browser.close();

  const jsonContent = JSON.stringify(songs, null, 2);
  fs.writeFileSync('melon100.json', jsonContent, 'utf8');

  console.log('크롤링 완료!');
})();
