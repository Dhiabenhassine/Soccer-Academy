const express = require('express');
const router = express.Router()
const { createTeam,getTeamById,deleteTeam ,updateTeam,getAllTeams} = require('../Controller/teamController');

router.post('/',createTeam)
router.get('/',getAllTeams)
router.get('/getTeam/:teamId',getTeamById)
router.put('/update/:teamId',updateTeam)
router.delete('/delete/:teamId',deleteTeam)
module.exports = router;
