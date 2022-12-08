const express = require("express"); 
const cors = require("cors"); 
require("dotenv").config(); 
const dbConnect = require("./config/mongo"); 
const app = express(); 

const { dogModel } = require("./models/index"); 
const data = require("../search.json"); 

const cargarDb = (data) => {
	dogModel.create(data).then(res => console.log("Dogs in dB"), error => console.log(error));
}

//meddleware 
app.use(cors()); //error de origen cruzado
app.use(express.json()); //Manejar data .json

const port = process.env.PORT || 3000; 

//router 
app.use("/api", require("./routers")); 

app.listen(port, ()=>{
	console.log(`http://localhost:${port}`); 
  
}); 


dbConnect();
cargarDb(data);