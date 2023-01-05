const dbConnect = require("./config/mongo");
const print = require("./utils/myConsole"); 
const app = require("./app");
const dotenv = require ('dotenv');

dotenv.config();

// const pushDatabase = require("./utils/pushDatabase");
// const pushDBusers = require("./utils/pushDBusers");
// const { pushDBvolunteers } = require("./utils/pushDBvolunteers");
// const pushDBpress = require("./utils/pushDBpress");


const PORT = process.env.PORT || 3001;



dbConnect().then((res) => {

  // pushDatabase();
  // pushDBusers();
  // pushDBvolunteers();
  // pushDBpress();

  app.listen(process.env.PORT, () => {
    print.succe("Successfully connected");
    print.listen(`http://localhost:${PORT}`);
  });
},

  (error) => {
    print.error("Connection error");
  }
);


