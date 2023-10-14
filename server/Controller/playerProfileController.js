const Profile= require('../db/model/playerProfile');


module.exports={
    getPlayer:async(req,res)=>{
        try{
            const profiles=await Profile.findAll()
            res.status(201).json({profiles})
        }
        catch(err){
            console.log("error", err)
            res.status(500).json(err)
    }
},
getProfileById:async(req,res)=>{
    try {
const {id}=req.params
const profile=await Profile.findByPk(id)
if(!profile){
    res.status(404).json({error:'profile not found'})
} else{
    res.status(200).json(profile)
}
    }
    catch (error){
        console.error('error getting profile by ID:',error)
res.status(500).json(error)
    }
},
createProfile:async(req,res)=>{
    try {
        const { PlayerId, TeamId } = req.params;
        const {
          playerName,
          position,
          dateOfBirth,
          totalGoals,
          totalAssists,
          yellowCards,
          redCards,
        } = req.body;
        
        const profile = await Profile.create({
          playerName,
          position,
          dateOfBirth,
          totalGoals,
          totalAssists,
          yellowCards,
          redCards,
          PlayerId: PlayerId,
          TeamId: TeamId,  
        });
    
        res.status(201).json(profile);
      } catch (error) {
        console.error('Error creating new profile:', error);
        res.status(500).json({ error: 'Error creating profile' });
      }
},
updateProfile:(req,res)=>{
    const {id}=req.params
    const {playerName,position}=req.body
    Profile.findByPk(id)
    .then((profile)=>{
        if(!profile){
            res.status(404).json({error:'profile not found'})
        } else {
            profile
            .update({playerName,position})
            .then(()=>{
                res.status(200).json({message:'profile updated'})
            })
        }
    })
.catch((error)=>{
    console.error('error getting profile by ID:',error)
    res.status(500).json({error:'error getting profile by ID'})
})
},
}