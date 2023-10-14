const router=require("express").Router()
const {getTournament, addTournament}=require("../Controller/tournamentController")

router.get('/',getTournament)
router.post('/',addTournament)

module.exports=router