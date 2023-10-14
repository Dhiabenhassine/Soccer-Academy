const router=require("express").Router()
const { getOneByid , updatePlayer ,deletePlayer}=require("../Controller/playerController")



router.get("/getPlayer/:id", getOneByid)
router.put("/Update/:id", updatePlayer)
router.delete("/delete/:id",deletePlayer)

module.exports=router