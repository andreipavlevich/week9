const express = require('express');
const app = express();
    

app.get('/login/', (req, res) => res.send('login:andrei'));

app.all('/*', (req, res) => res.send('andreipavlevich'));

app.listen(process.env.PORT)
