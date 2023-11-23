const mongoose=require("mongoose")

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Trainer = mongoose.model("Trainer",newSchema)

module.exports=Trainer