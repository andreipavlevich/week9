const express = require('express');

const app = express();

const CORS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers':'x-test,Content-Type,Accept, Access-Control-Allow-Headers'
        }; 

app.use((r, res, next) => { r.res.set(CORS); next(); });

app.get('/', (req, res) => res.send('andreipavlevich'));

app.listen(process.env.PORT);
