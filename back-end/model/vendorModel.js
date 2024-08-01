const mongoose= require("mongoose")



const vendorSchema= new mongoose.Schema({
vendorName:{
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
},
name: {
    type: String,
    required: true
},
price: {
    type: Number,
    required: true
},
category: {
    type: String,
    required: true
},
image:{
    type: String,
    
}
    

})



const Vendor= mongoose.model("vendor", vendorSchema)




module.exports= Vendor