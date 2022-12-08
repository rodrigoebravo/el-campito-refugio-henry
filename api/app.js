const express = require("express"); 
const cors = require("cors"); 
require("dotenv").config(); 
const dbConnect = require("./config/mongo"); 
const app = express(); 


//midleware
app.use(cors()); //error de origen cruzado
app.use(express.json()); //Manejar data .json


//router 
app.use("/api", require("./routers")); 

app.listen(process.env.PORT, ()=>{
	console.log(`http://localhost:${process.env.PORT}`); 
  
}); 


dbConnect();
