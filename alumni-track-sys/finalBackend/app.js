
const express = require('express')
const app = express()
const port = 3045
const events = require('events');
const eventEmitter = new events.EventEmitter();
const Routes = require('./Routes/apiroutes');
var cors = require('cors')

// const multer=require("multer")
global.config= require('./config/config')
app.use(cors())

const startApp = function () {
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(multer());
app.set("view engine", "hbs");
app.use("/assets", express.static("assets"));
app.use("/images", express.static("images"));



app.use('/api', Routes);
app.listen(port,()=> console.log(`app listening on port : ${port}`));
}

// //for bill
// const bill = require("./billing")
// app.use(cors());
// app.use(express.json());
// app.use("/" , bill) ; 


// SETTING DB
require('./Db/connection_db')(eventEmitter);

eventEmitter.once('db-connected', startApp);
