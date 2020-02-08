const mongoose = require("mongoose");


const MONGODB_URI = `mongodb://localhost:27017/CRUD`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));
