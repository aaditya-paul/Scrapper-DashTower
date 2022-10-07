const puppeteer = require('puppeteer');

async function scrap(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  //  get main body
  const [el] = await page.$x('/html/body/div[1]/div/main/div/div[6]');
  const text = await el.getProperty('textContent');
  const textPlain = await text.jsonValue();

  // sliced up text

  //   console.log(textPlain.slice(0, 64));

  console.log(textPlain);

  await browser.close();
}

// function getting called
scrap(
  'https://hackernoon.com/shlinkedin-a-fun-social-network-built-on-open-source'
);
