const mongoose= require('mongoose')

let prodSchema= new mongoose.Schema({ 
   _id: mongoose.Schema.Types.ObjectId,
    prod_id:Number,
    prod_name:String,
    cat_id:Number,
    cat_name:String
})

module.exports= mongoose.model("prodetails",prodSchema)


