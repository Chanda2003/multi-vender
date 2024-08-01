
const Vendor= require("../model/vendorModel")


const vendorProducts= async (req,res)=>{
    try{
        const {name, price, image, category, vendorName} = req.body
        const vendorData = {
            name, price, image, category, vendorName
        }
        const user= await Vendor.create(vendorData)
        res.status(201).json({
            status: "success",
            data: user
        })
    }catch (err){
        res.status(400).json({
            status: "fail",
            message: err.message
        })

    }
}



const getProducts = async (req,res)=>{
   try{
const user= await Vendor.find()

res.status(201).json({
    status: "success",
    result: user.length,
     user
})
   }catch(err){
    res.status(400).json({
        status: "fail",
        message: err.message
    })
   }
}


const deleteProducts = async (req,res)=>{
    try{
 const user= await Vendor.findByIdAndDelete(req.params.id)
 
 res.status(201).json({
     status: "success",
      user
 })
    }catch(err){
     res.status(400).json({
         status: "fail",
         message: err.message
     })
    }
 }





module.exports= {
      getProducts,
   vendorProducts,
   deleteProducts
}