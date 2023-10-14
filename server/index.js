const express = require ("express");
const sequelize = require('./db/connectionDb');
const {Sequelize} = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const admin = require('./Router/adminRouter')
const player = require('./Router/playerRouter')
const team = require('./Router/teamRouter')
const parent = require('./Router/parentRouter')
const auth = require ('./Router/authRouter')
const PlayerProfile=require('./Router/PlayerProfileRouter')
const match=require('./Router/matchRouter')
const result=require('./Router/matchResultRouter')
const standing=require('./Router/standingRouter')
const tournament=require('./Router/tournamentRouter')

const PORT = process.env.PORT || 3000;
const app = express();

 
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); 
app.use('/admin',admin)
app.use('/player',player)
app.use('/team',team)
app.use('/parent',parent)
app.use('/auth',auth)
app.use('/profile',PlayerProfile)
app.use('/match',match)
app.use('/result',result)
app.use('/standing',standing)
app.use('/tournament',tournament)

sequelize.sync().then(()=> console.log("db connected"));

sequelize.authenticate().then(()=>{console.log("connection has been succesfuly")}) 
.catch((err)=>{
 console.log(err , "anable to connect db ");
})

app.listen(PORT,function(){
    console.log("listening on port "+ PORT);
})



