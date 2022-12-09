const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.wiasisw.mongodb.net/${process.env.NAME_DB}?retryWrites=true&w=majority`;

  mongoose.connect(
    DB_URI,
    {
      //opctions
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      
      if (!err) {
        console.log("***established connection***");
      }else{

        console.log("***connection error***");
      }
      
    }
  );
};

mongoose.set('strictQuery', false);

module.exports = dbConnect;
