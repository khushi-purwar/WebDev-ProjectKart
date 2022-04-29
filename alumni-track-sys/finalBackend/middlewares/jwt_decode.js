
const async = require("hbs/lib/async");
const BaseRepo = require("../app/Repository/BaseRepository");
const { user } = require("../models");
const jwt = require('jsonwebtoken');
const { config } = require("dotenv");
const CONFIG = require("../config/config");

 


async function Middleware(req,res,next){
    const authHeader = req.header('Authorization');
    const userToken =  authHeader.split(' ')[1];
    console.log(userToken)
    if(!userToken){
        return res.status(401).json({message: "Unauthorised Access"});
     }
     console.log('secret',CONFIG.jwtsecret);
     jwt.verify(userToken, CONFIG.jwtsecret, async (err, data)=>{
         console.log('dT',data);
        if(err){
            return res.status(403).json({message: "Invalid token",err});
        }
        console.log('jwt payload --> ', data);

        const params = {
            searchParams: {id:data._id},
        };
        
        const userData = await BaseRepo.baseDetail(user,params);
        if(userData && userData.status !== 'Active'){
            return res.status(403).json({message: "This account is currently not active."});
        }
        // req.user = userData
        // res.send(userData)
        // req.user(userData)
        return next ();
     });
}

module.exports = Middleware;

// async function middleware(req,res,next){

// }