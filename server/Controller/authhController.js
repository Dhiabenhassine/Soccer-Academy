
const parent=require("../db/model/parent")
const player=require("../db/model/player")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')



  const authController = {
    Register: (req, res) => {
      console.log(req.body);
      const { name, email, password, role } = req.body;
  
      if (!name || !email || !password) {
        return res.status(422).json({ error: "Please fill in all the required fields" });
      }
  
      if (role === "parent") {
        bcrypt.hash(password, 8)
          .then((hash) => {
            console.log("password", hash);
            parent.create({
              name,
              email,
              password: hash,
              role,
            })
              .then(() => {
                return res.status(201).json("User registered successfully");
              })
              .catch((err) => {
                res.status(500).json({ error: err });
              });
          });
      } else if (role === "player") {
        bcrypt.hash(password, 8)
          .then((hash) => {
            console.log("password", hash);
            player.create({
              name,
              email,
              password: hash,
              role,
            })
              .then(() => {
                return res.status(201).json("User registered successfully");
              })
              .catch((err) => {
                res.status(500).json({ error: err });
              });
          });
      }
    },
  
 
    Login: async(req,res)=>{
                const {email,password,role}=req.body;
                if ( !req.body.email || !req.body.password || !req.body.role ){
                    return res.status(422).json({errr:"Please filled the field property"});
                }
                if(email)
               if(role==="parent"){
                try{
                    const existUser = await parent.findOne({where:{email:email}});
                    if (!existUser){
                    return res.status(500).json("No user found !")
                } 
                else {
                    console.log( "bcrypt" , bcrypt.compare)
                const passwordMatch = await bcrypt.compare(password,existUser.password)
        
                
                if(!passwordMatch){
                    return res.status(401).json('The password is wrong !')
                } 
            
                else {
                    
        const secretKey="ykndhd"
      
        const acsessToken =jwt.sign({
            email:req.body.email,
            password:req.body.password,
            role:req.body.role
           }, secretKey, { expiresIn: '12h', algorithm: 'HS256' }) 
          existUser.token=acsessToken
        
          const options ={
        expires :new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true
          }
          console.log(acsessToken,"acsessToken");
          res.status(201).json({acsessToken,existUser})
                 }
            }
        }
        catch (error){
            console.log(error);
            res.status(500).json("there is an error")
        }
               }else if(role==="player"){
                try{
                    const existUser = await player.findOne({where:{email:email}});
                    if (!existUser){
                    return res.status(500).json("No user found !")
                } 
                else {
                    console.log( "bcrypt" , bcrypt.compare)
                const passwordMatch = await bcrypt.compare(password,existUser.password)
                console.log("password", password)
                console.log("password USER", existUser.password)
                console.log("password match", passwordMatch)
                
                if(!passwordMatch){
                    return res.status(401).json('The password is wrong !')
                } 
            
                else {
                    
        const secretKey="ykndhd"
      
        const acsessToken =jwt.sign({
            email:req.body.email,
            password:req.body.password,
            role:req.body.role
           }, secretKey, { expiresIn: '12h', algorithm: 'HS256' }) 
          existUser.token=acsessToken
        
          const options ={
        expires :new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true
          }
          
          res.status(201).json({acsessToken,existUser})
                 }
            }
        }
        catch (error){
            console.log(error);
            res.status(500).json("there is an error")
        }
               }
    
    },    profile:async(req,res)=>{
  
               if(req.role==="player"){
                const user=await player.findOne({where:{email:req.email}})
          
                return res.json({Status:"success",user})
               }else if(req.role="parent"){
                const user=await parent.findOne({where:{email:req.email}})
                return res.json({Status:"success",user})
               }
}  
 

}

module.exports = authController;
