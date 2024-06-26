const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// mongodb://localhost:27017
const URI = 'mongodb://malek:1234@auctions-shard-00-00.fud2c.mongodb.net:27017,auctions-shard-00-01.fud2c.mongodb.net:27017,auctions-shard-00-02.fud2c.mongodb.net:27017/auctions?ssl=true&replicaSet=atlas-fw1kgr-shard-0&authSource=admin&retryWrites=true&w=majority';


const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

// connecting mongoose
mongoose.connect("mongodb://localhost:27017/cc").then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);




const home = require('./routes/routes');
const signs = require('./routes/signs-Routes');
const add = require('./routes/addItem-Route');
const category = require('./routes/category')
const item = require('./routes/item')
const user = require('./routes/user')
const app = express();

/* app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
}); */

app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(home);
app.use(signs);
app.use(add);
app.use(user)
app.use(category)
app.use(item)



