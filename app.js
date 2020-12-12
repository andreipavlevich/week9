const express = require('express');
const app = express();
    
app.all('/*', (req, res) => 
{
    res.send('andreipavlevich');
});

app.listen(process.env.PORT)
