const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.z20k9qo.mongodb.net/${process.env.NAME_DB}?retryWrites=true&w=majority`;

  // const DB_URI = "mongodb://localhost:27017/MyDB";
  return mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },

  );
};

mongoose.set('strictQuery', false);

module.exports = dbConnect;