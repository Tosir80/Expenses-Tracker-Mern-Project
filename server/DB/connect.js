//Import the mongoose module
const mongoose = require('mongoose');

// const mongoDB="mongodb://localhost:27017/expense"
const mongoDB = "mongodb+srv://expensetracker:ikbtSmdT7bKgn5HT@cluster0.e4xul.mongodb.net/expensetracker?retryWrites=true&w=majority"
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connection successfully")).catch((err)=>console.log(err.message))


const con = mongoose.connect(mongoDB)
        .then(db => {
            console.log("Database Connected");
            return db;
        }).catch(err => {
            console.log("Connection Error");
        })

module.exports = con;