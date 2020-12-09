//"use strict";

/*import all libraries */
//import config from "./config/config.js";
import mongoose from "mongoose";

//require('dotenv').config();

// const {
//   DB_URI
// } = process.env;

/* Connect to your database using mongoose */
const connectToDatabase = () => {

  //const link = `${DB_URI}`;
  const link = "mongodb+srv://tomliraz:gatoraider@gatoraider.w5bw7.mongodb.net/blogposts?retryWrites=true&w=majority";

  //see https://mongoosejs.com/docs/connections.html
  //See https://docs.atlas.mongodb.com/driver-connection/
  mongoose
    .connect(link, { useNewUrlParser: true, useUnifiedTopology: true})
    .catch((error) => console.error(error));
  mongoose.set("useCreateIndex", true);
  mongoose.set("useFindAndModify", false);
  return mongoose.connection;
};

export { connectToDatabase }; 