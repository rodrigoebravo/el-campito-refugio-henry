const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.wiasisw.mongodb.net/${process.env.NAME_DB}?retryWrites=true&w=majority`;
  // const DB_URI = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.z20k9qo.mongodb.net/${process.env.NAME_DB}?retryWrites=true&w=majority`;//nuevo
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
