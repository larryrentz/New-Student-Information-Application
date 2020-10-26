import path from 'path';
import express from 'express';
import config from './config/config.js'

 
const app = express();
 
app.use('/', express.static('./../../client'));
 
app.all('/*', (req, res) => {
 res.statusCode === 404 ? res.send('Sorry, information not available') : res.sendFile(path.resolve('./client/index.html'))  
});

app.listen(config.port, () => console.log(`App now listening on port ${config.port}`));

app.get('/map', (req, res) => {
    res.render('index.html')
})

app.get('/academics', (req, res) => {
    res.render('index.html')
})

app.get('/health', (req, res) => {
    res.render('index.html')
})

app.get('/housing', (req, res) => {
    res.render('index.html')
})

app.get('/finance', (req, res) => {
    res.render('index.html')
})