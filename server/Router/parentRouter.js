const router=require("express").Router()
const {updateParent,deleteParent,getParent}=require("../Controller/parentController")



router.put("/update/:id",updateParent)
router.delete("/delete/:id",deleteParent)
router.get("/getParent/:id",getParent)


module.exports=router