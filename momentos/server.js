const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const app = express();
require('./models/User');
require('./models/Memories');
//Passport
require('./services/passport');
//DB
mongoose.connect(keys.mongoURI,{ useNewUrlParser: true }, ()=>console.log('DB Connected'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
//routes
require('./routes/authRoute')(app);
require('./routes/memories')(app);

//Listen
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`Running on port ${port}`));