const Tournament =require('../db/model/tournament')

module.exports={
    getTournament:async(req,res)=>{
        try{
            const tournament =await Tournament.findAll()
res.status(201).json(tournament)
        }
        catch(error){
console.log("error",error)
res.status(500).json(err)
        }
    },
    addTournament : async (req,res)=>{
        try{
            const {tournamentName,startDate,endDate}=req.body
            const tournament = await Tournament.create({
                tournamentName,
                startDate,
                endDate
            })
            res.status(201).json(tournament)
        } catch(err){
            console.log('Error', err);
            res.status(500).json({err:'error add tournament'})
        }
    }
}