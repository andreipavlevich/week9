import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('andreipavlevich'));

app.listen(4321);
