const express = require('express');
const puppeteer = require('puppeteer');
const app = express();
    

app.get('/login/', (req, res) => res.send('login:andrei'));

app.get('/test/', async (req,res) =>
    {
      await res.set('Content-Type', 'application/json');
      const URL = 'https://kodaktor.ru/g/80b5cdf';
      const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
      const page = await browser.newPage();
      await page.goto(URL);
      await page.click('#bt');
      await page.waitForSelector('#inp')
      .then(res.send(page.querySelector('#inp').value));
      await browser.close();
});

app.all('/*', (req, res) => res.send('andreipavlevich'));

app.listen(process.env.PORT)
