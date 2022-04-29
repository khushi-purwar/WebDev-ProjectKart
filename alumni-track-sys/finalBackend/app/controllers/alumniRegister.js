'use strict'
const {alumniregistration} = require("../../models");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const baseRepo = require('../Repository/BaseRepository')



module.exports ={
    RegisterAlumni , 
    UpdateDetails
}

async function RegisterAlumni(req , res , next){
    try {
        const salt =await bcrypt.genSalt(10);
        
        const Secpassword = await bcrypt.hash(req.body.Password , salt) ;
        const data = {
            Name:  req.body.Name, 
            EnrollmentNO:  req.body.EnrollmentNO ,
            CollegeId: req.body.CollegeId ,
            EmailId:req.body.EmailId ,
            Password:Secpassword,
            YearOfPassing : req.body.YearOfPassing
        }

          const FormedData = await baseRepo.baseCreate(alumniregistration , data) ;

        console.log("data entered :" , FormedData)
        res.status(200).json("data sent successfully")
        return next();

 

    } catch (error) {
        console.log("error : " , error)
        return next(error);
    }
}
    
async function UpdateDetails(req , res , next){
    try {
        const update = await db.alumniregistration.update(
            {
                CollegeName : "mait" ,
                QualificationDetails : "Btech" , 
                YearOfPassing:"2020" ,
                CurrentlyDoing : "job",
                FurtherPlans : "startup" ,
                ContactNo : "98745482",
            },
            {
            where : {
              id:1
           }
        } ) 
        res.status(200).json({update})
        return next();
        
    }catch (error) {
         console.log("error found" , error)
         return next(error);
    }
}








  
