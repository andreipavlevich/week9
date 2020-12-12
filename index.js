import express from 'express';

const app = express();

app.all('/*', (req, res) => res.send('andreipavlevich'));

app.listen(4321);
