// this file is to connect to database
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://prasoonsoni:<password>@cluster0.qhqs8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;