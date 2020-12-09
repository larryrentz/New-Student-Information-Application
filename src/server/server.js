import path from 'path';
import express from 'express';
import {connectToDatabase} from './connectMongodb.js';

//const postRouter = require('./routes/router');
import {postRouter} from './routes/router.js';


//require('dotenv').config();

// const {
//   PORT
// } = process.env;

//connect to database
const db = connectToDatabase().on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
  );
  db.once("open", () => {
    console.log("Successfully connected to mongoose database!");

  });

const app = express();


//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('build')); //client/build???

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.use('/api', postRouter);


app.all('/*', (req, res) => {
 res.statusCode === 404 ? res.send('Sorry, information not available') : res.sendFile(path.resolve('./client/index.html'))
});


//app.listen(PORT, () => console.log(`App now listening on http://localhost:${PORT}`));
app.listen(3000, () => console.log(`App now listening on http://localhost:${3000}`));
