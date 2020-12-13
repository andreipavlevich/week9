const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const app = express();

const CORS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers':'x-test,Content-Type,Accept, Access-Control-Allow-Headers'
        }; 
    

app.use((r, res, next) => { r.res.set(CORS); next(); });

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
    
app.get('/login/', (req, res) => res.send('login:andrei'));

app.get('/test/', async (req,res,next) => 
{
      //res.set('Content-Type', 'application/json');
      //const URL = req.query;          
          
      //const URL = 'https://kodaktor.ru/g/80b5cdf';
    //  const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    //  const page = await browser.newPage();
    //  await page.goto(URL);
    //  await page.waitForSelector('#inp');
    //  await page.waitForSelector('#bt');
    //  await page.click('#bt');
    //  const got = await page.$eval('#inp', el => el.value);
      // res.send(got);
    //  await browser.close();
        res.send(req.query.URL);


});

app.all('/*', (req, res) => res.send('andreipavlevich'));

app.listen(process.env.PORT)
