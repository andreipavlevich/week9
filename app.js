const express = require('express');
//const bodyParser = require('body-parser');
//const puppeteer = require('puppeteer');

const app = express();

const CORS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers':'x-test,Content-Type,Accept, Access-Control-Allow-Headers'
        }; 
    

app.use((r, res, next) => { r.res.set(CORS); next(); });
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());

app.get('/login/', (req, res) => res.send('login: andreipavlevich'));

//app.get('/test/', async (req,res) =>
  //  {
      //await res.set('Content-Type', 'application/json');
      //const URL = 'https://kodaktor.ru/g/80b5cdf';
      //const browser = await puppeteer.launch({executablePath: 'usr/bin/chromium-browser', headless: true, args: ['--no-sandbox']});
      //const page = await browser.newPage();
      //await page.goto(URL);
      //await page.click('#bt');
      //await page.waitForSelector('#inp');
      //console.log(page.querySelector('#inp').value);

      //await res.send('ok');
 // const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  //const page = await browser.newPage();

  //await page.goto("https://repl.it/");
  
    //});
    
app.all('/*', (req, res) => res.send('andreipavlevich'));

app.listen(process.env.PORT);
