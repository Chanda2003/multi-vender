
const app= require("./app")
const mongoose= require("mongoose")
const dotenv= require("dotenv")
const cors = require('cors')

dotenv.config()

app.use(cors())

mongoose.connect(process.env.DATA_BASE)
.then(()=>{
    console.log("connected to database")
})
.catch(()=>{
    console.log("error in connect to db")
})













app.listen(8080,()=>{
    console.log("server is running in the port 8080...")
})







