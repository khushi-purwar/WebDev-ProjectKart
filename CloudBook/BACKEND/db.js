const mongoose = require ('mongoose');
const mongoURI = "mongodb://localhost:27017/cloudBook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('conected to mongo successfully')
    })
}

module.exports = connectToMongo;