const router=require("express").Router()
const {Login , Register,profile} = require('../Controller/authhController')
const {validateToken}=require("../utils/JWT")




router.post("/signup",Register)
router.post("/signin",Login)
router.post("/",validateToken,profile)



module.exports=router