
const express= require("express")
const vendorController= require("../controller/vendorController")

const router= express.Router()






router.route("/getvendorproducts").get(vendorController.getProducts)


router.route("/vendor").post(vendorController.vendorProducts)


router.route("/getvendorproducts/:id").delete(vendorController.deleteProducts)






module.exports= router