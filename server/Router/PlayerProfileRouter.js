const router=require("express").Router()
const {getPlayer, getProfileById, createProfile, updateProfile}=require("../Controller/playerProfileController")

router.get('/',getPlayer)
router.get('/get/:id',getProfileById)
router.post('/add/:PlayerId/:TeamId',createProfile)
router.put('/update/:id',updateProfile)

module.exports=router