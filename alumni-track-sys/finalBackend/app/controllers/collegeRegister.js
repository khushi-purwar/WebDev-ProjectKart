'use strict'
const {collegeRegisteration} = require("../../models");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const baseRepo = require('../Repository/BaseRepository')



module.exports ={
    RegisterCollege , 
    
}

async function RegisterCollege(req , res , next){
    try {
        const salt =await bcrypt.genSalt(10);
        
        const Secpassword = await bcrypt.hash(req.body.CollegePassword , salt) ;
        const data = {
            CollegeName:  req.body.CollegeName, 
            CollegeId:  req.body.CollegeId ,
            CollegePhone: req.body.CollegePhone ,
            collegeEmail:req.body.collegeEmail ,
            CollegePassword:Secpassword
            
        }

        console.log("data => " , data)

          const FormedData = await baseRepo.baseCreate(collegeRegisteration , data) ;

        console.log("data entered :" , FormedData)
        res.status(200).json("Registration Done Successfully")
        return next();

 

    } catch (error) {
        console.log("error : " , error)
        return next(error);
    }
}
    
// async function UpdateDetails(req , res , next){
//     try {
//         const update = await db.alumniregistration.update(
//             {
//                 CollegeName : "mait" ,
//                 QualificationDetails : "Btech" , 
//                 YearOfPassing:"2020" ,
//                 CurrentlyDoing : "job",
//                 FurtherPlans : "startup" ,
//                 ContactNo : "98745482",
//             },
//             {
//             where : {
//               id:1
//            }
//         } ) 
//         res.status(200).json({update})
//         return next();
        
//     }catch (error) {
//          console.log("error found" , error)
//          return next(error);
//     }
// }








  
