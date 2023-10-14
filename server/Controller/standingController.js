const Standings=require('../db/model/standing')

module.exports={
    getStanding:async(req,res)=>{
        try{
            const standing=await Standings.findAll()
            res.status(201).json(standing)
        } catch(error){
            console.log('error getting standing',error)
            res.status(500).json({error:'error fetching standing'})
        }
    }
}