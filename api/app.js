const express = require("express"); 
const cors = require("cors"); 
const morgan = require("morgan"); 
const app = express(); 


app.use(morgan('tiny'))
app.use(cors()); //error de origen cruzado
app.use(express.json()); //Manejar data .json



app.use("/api", require("./routers")); 


module.exports = app; 

