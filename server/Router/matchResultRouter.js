const router=require("express").Router()
const {getResult, getResultById, addResult}=require("../Controller/matchResultController")

router.get('/',getResult)
router.get('/get/id',getResultById)
router.post('/add/:matchId',addResult)

module.exports=router