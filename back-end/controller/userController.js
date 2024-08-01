
const User= require("../model/userSchema")


const register= async (req,res)=>{
    try{
        // const {}
        const user= await User.create(req.body)
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



const login= async (req,res)=>{
   try{
const {email,password}= req.body
const user= await User.findOne({email}).select("+password")
if( password=== user.password){
res.status(201).json({
    status: "success",
    data: user
})
}else{
    res.status(400).json({
        status: "fail",
        message: "invalid email or password "
    })
}

   }catch(err){
    res.status(400).json({
        status: "fail",
        message: err.message
    })
   }
}


const getusers=async (req,res)=>{

   try{
    const users= await User.find()
    res.status(200).json({
        status: "success",
        result: users.length,
        users
    })

   }catch(err){
    res.status(400).json({
        status: "fail",
        message: err.message
    })
   }
}

const getoneuser=async (req,res)=>{

    try{
     const users= await User.findById(req.params.id)
     res.status(200).json({
         status: "success",
         users
     })
 
    }catch(err){
     res.status(400).json({
         status: "fail",
         message: err.message
     })
    }
 }

 const deleteuser=async (req,res)=>{

    try{
     const users= await User.findByIdAndDelete(req.params.id)
     res.status(200).json({
         status: "success",
         users
     })
 
    }catch(err){
     res.status(400).json({
         status: "fail",
         message: err.message
     })
    }
 }


module.exports= {
    login,
    register,
    getusers,
    getoneuser,
    deleteuser
}













