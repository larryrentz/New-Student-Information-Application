import path from 'path';
import express from 'express';
import config from './config/config.js'
import {connectToDatabase} from './connectMongodb.js';
let bodyParser = require('body-parser');
let cors = require('cors');

const router = require('../server/routes/router')

//connect to database
const db = connectToDatabase().on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
  );
  db.once("open", () => {
    console.log("Successfully connected to mongoose database!");

  });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/links', router)

app.all('/*', (req, res) => {
 res.statusCode === 404 ? res.send('Sorry, information not available') : res.sendFile(path.resolve('./client/index.html'))  
});

app.listen(config.port, () => console.log(`App now listening on http://localhost:${config.port}`)); 