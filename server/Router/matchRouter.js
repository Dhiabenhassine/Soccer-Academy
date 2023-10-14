const router=require("express").Router()
const {getMatch, getMatchById, createMatch, updateMatchDateAndTime}=require("../Controller/matchController")

router.get('/',getMatch)
router.get('/get/:id',getMatchById)
router.post('/',createMatch)
router.put('/update/:matchId',updateMatchDateAndTime)

module.exports=router