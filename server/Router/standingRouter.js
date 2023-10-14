const router=require("express").Router()
const {getStanding}=require("../Controller/standingController")

router.get('/',getStanding)

module.exports=router