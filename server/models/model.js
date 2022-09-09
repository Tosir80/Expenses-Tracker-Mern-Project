
const mongoose =require('mongoose')


const categorySechema = new mongoose.Schema({
    type:{
        type:String, 
        default:'Investment'
    },
    color:{
        type:String,
        default:"#FCBE44"
    }
})

///Transaction
const transactionSechema = new mongoose.Schema({
    name:{
        type:String, 
        default:'Anonymous'
    },
    type:{
        type:String, 
        default:'Investment'
    },
    amount:{
        type:Number,
    },
    date:{
        type:Date,
        default:Date.now
    }
})


const categories= mongoose.model('categories',categorySechema)
const Transaction= mongoose.model('transaction',transactionSechema)


module.exports={
    categories,
    Transaction
}