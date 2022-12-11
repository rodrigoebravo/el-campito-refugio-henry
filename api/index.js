const dbConnect = require("./config/mongo");
const app = require("./app");
require("dotenv").config();
// const pushDatabase = require("./utils/pushDatabase");
// const pushDBusers = require("./utils/pushDBusers");


const PORT = process.env.PORT || 3001;



dbConnect().then((res) => {

  // pushDatabase();
  // pushDBusers();
  
  app.listen(process.env.PORT, () => {
    console.log("***Successfully connected***");
    console.log(`http://localhost:${PORT}`);
  });
},

  (error) => {
    console.log("***Connection error***");
  }
);


