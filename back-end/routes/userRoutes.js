
const express= require("express")
const userController= require("../controller/userController")

const router= express.Router()






router.route("/login").post(userController.login)


router.route("/register").post(userController.register)

router.route("/getvendors").get(userController.getusers)
router.route("/getvendors/:id").get(userController.getoneuser)
.delete(userController.deleteuser)







module.exports= router











