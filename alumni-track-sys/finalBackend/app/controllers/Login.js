
'use strict'
const {alumniregistration , collegeRegisteration} = require("../../models");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const BaseRepo = require('../Repository/BaseRepository')
const jwt = require('jsonwebtoken')


module.exports ={
    Login , 

}


async function Login(req, res, next) {
    const { email, password,role} = req.body;
    console.log("user email",email)
    console.log("userr password",password)
    if(!email || !password || !role) return res.status(400).json({message: "Please provide email , password and role"});
     console.log('still on');
    // const params = {
    //      searchParams: {EmailId:email},

    //  }
    try{
      if(role==='alumni'){
        const params = {
          searchParams: {EmailId:email},
 
      }
        const User = await BaseRepo.baseDetail(alumniregistration, params);
        console.log("Usesr",User);
        if (!User){
          console.log("No user exist with this email.")
          return res.status(400).json({message: "No user exist with this email"});
        }
        if (!bcrypt.compareSync(password, User.Password)) {
            return res.status(400).json({message: "Password Incorrect"});
         }
         const college = await BaseRepo.baseDetail(collegeRegisteration,{searchParams: {CollegeId:User.CollegeId}},
          );

const token =  jwt.sign({EnrollmentNO:User.EnrollmentNO , Role:role},process.env.SECRET_KEY,{expiresIn: '365d'} );
console.log("Login Successfully done now", User);

         return res.status(200).json({token ,User ,college , role})

 
        

      }
    

      if(role==='college'){
        const params = {
          searchParams: {collegeEmail:email},
         //  attributes: [ email]
      }
        const User = await BaseRepo.baseDetail(collegeRegisteration, params);
        console.log("Usesr",User);
        if (!User){
          console.log("No user exist with this email.")
          return res.status(400).json({message: "No user exist with this email"});
        }
        if (!bcrypt.compareSync(password, User.CollegePassword)) {
            return res.status(400).json({message: "Password Incorrect"});
         }

         const token =  jwt.sign({CollegeId:User.CollegeId , Role:role},process.env.SECRET_KEY,{expiresIn: '365d'} );
         console.log("token :",token)
         console.log("Login Successfully done now", User);

        //  const role = User.role
        //  console.log(role)
        return res.status(200).json({token,User , role});
      
      }

       return res.status(404).json({message: "Invalid role"});

      
        //    console.log(Users[0].id)
          //  global.a=Users.id
          //  res.render("index",{
          //   rows:Users[0],
          //   img_id:Users[0].image_fileid
          // })
          // res.render("Temp_Profile",{img_id:Users[0].image_fileid})
           
          
  
    }
    catch(err){
        console.log("Error in getUsers : ", err);
        res.status(404).json({message: "internal server error"});
    }
  
  }
  