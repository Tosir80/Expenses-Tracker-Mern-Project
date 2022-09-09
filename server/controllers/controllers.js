const {categories,Transaction} =require('../models/model')


//create cate
exports.createCategories= async(req,res)=>{
    const Create = await new categories({
     type: "Expense",
      color: "#C43095",
        
    })
    Create.save()
    res.send(Create)
}


//get cate
exports.getCate=async(req,res)=>{
    const cate=  await categories.find()
   const data=  await cate.map(v=>Object.assign({},{type:v.type,color:v.color}))
    res.send(data)
}


//createTransaction
exports.createTransaction= async(req,res)=>{
    const {name,type,amount} =req.body 
    console.log(req.body);
    try {
    if(name && type && amount){
        const newTransaction = await Transaction({name,type,amount})
        newTransaction.save()
        res.status(201).json({message:"Transaction is created",newTransaction})
    }else{
        res.status(400).json('Please give input')
    }
      
    
    } catch (error) {
        console.log(error)
    }
}


//get Transaction
exports.getTransaction= async(req,res)=>{
  const transaction = await Transaction.find()
  res.send(transaction)
}

//deleteTransaction 
exports.deleteTransaction= async(req,res)=>{
    const id= req.params.id 
    const deleteData = await Transaction.deleteOne({_id:id})
    res.status(200).send({message:"Data delete successfully",deleteData })
}


exports.getLabels=async(req,res)=>{
try {
    const marge= await Transaction.aggregate([
        {$lookup:{
            from:"categories",
            localField:'type',
            foreignField:"type",
            as:"categories_info"
        }},
        {
            $unwind:"$categories_info"
        }
    ])
    
    const result =await marge.map(v=>Object.assign({},{_id:v._id,name:v.name,type:v.type,amount:v.amount,color:v.categories_info["color"]}))
    res.send(result)
} catch (error) {
    console.log(error);
}
}