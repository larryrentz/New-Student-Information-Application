"use strict";

/*import all libraries */
import config from "./config/config.js";
import mongoose from "mongoose";

/* Connect to your database using mongoose */
const connectToDatabase = () => {
  const link = config.db.uri;
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