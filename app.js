const express = require('express');
const puppeteer = require('puppeteer');
const app = express();

async function getHASH() {
      const URL = 'https://kodaktor.ru/g/bb4613b';
      const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
      const page = await browser.newPage();
      await page.goto(URL);
      await page.waitForSelector('#inp')
      const x = 'hello';
      page.evaluate(x => document.querySelector('#inp').value = x, x);
      await page.waitForSelector('#bt');
      await page.click('#bt');
      const got = await page.$eval('#inp', el => el.value);
      console.log(got);
      await browser.close();
      return got;
  }
    

app.get('/login/', (req, res) => res.send('login:andrei'));

app.get('/test/', (req,res) => res.send(getHASH()));

app.all('/*', (req, res) => res.send('andreipavlevich'));

app.listen(process.env.PORT)
