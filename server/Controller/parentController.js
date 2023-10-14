const parent= require('../db/model/parent')

module.exports= {
    updateParent:(req,res)=>{
        const {name,email}=req.body
        parent.update(req.body,{where:{
            id:req.params.id
    }}).then(result=>res.status(201).json(result))
        .catch(err=> res.status(500).json(err))
    },
    deleteParent:(req,res)=>{
        parent.destroy({where:{id:req.params.id}})
        .then(result=>res.status(201).json(result))
        .catch(err=> res.status(500).json(err))
    },getParent:(req,res)=>{
        parent.findAll({where:{
            id:req.params.id
        }})
        .then(result=>res.status(201).json(result))
        .catch(err=> res.status(500).json(err))
    }
}