const dbConnect = require("./config/mongo");
const print = require("./utils/myConsole"); 
const app = require("./app");
const dotenv = require ('dotenv');

dotenv.config();

// const pushDatabase = require("./utils/pushDatabase");
// const pushDBusers = require("./utils/pushDBusers");
// const { pushDBvolunteers } = require("./utils/pushDBvolunteers");
// const pushDBpress = require("./utils/pushDBpress");
// const pushDBescolar = require("./utils/pushEscolar")


const PORT_BACK = process.env.BACK;



dbConnect().then((res) => {
  // Para llenar la Database - ¡¡¡ No ejecutar. Ya está cargada !!!
  // pushDatabase();
  // pushDBusers();
  // pushDBvolunteers();
  // pushDBpress();
  // pushDBescolar();

  app.listen(PORT_BACK, () => {
    print.succe("Successfully connected");
    print.listen(PORT_BACK);
  });
},

  (error) => {
    print.error("Connection error");
  }
);


