'use strict'
const db = require("../../models");
const express = require("express");
const router = express.Router();

module.exports ={
    SearchAlumniYearWise ,
    SearchAlumniCollegeWise,
    GetAllColleges,
    SearchAlumniYear_CollegeWise
}

async function SearchAlumniYearWise(req , res,next){
    // let year = new Date().getFullYear();
    try {
        const user = await db.alumniregistration.findAll(
            {
                where:   { YearOfPassing : req.params.year  }
            })
        console.log("data read : " , user)
        res.status(200).json({user})
        return next();

    } catch (error) {
        console.log("error found" , error)
        return next(error);
        
    }
}

async function SearchAlumniCollegeWise(req , res,next){
    try {
        const user = await db.alumniregistration.findAll(
            {
                where:   { CollegeId : req.params.CollegeId}
            }
        )
        console.log("data read : " , user)
        res.status(200).json({user})
        return next();

    } catch (error) {
        console.log("error found" , error)
        return next(error);
        
    }
}


async function GetAllColleges(req , res,next){
    // let year = new Date().getFullYear();
    try {
        const CollegeData = await db.collegeRegisteration.findAll()
        console.log("data read : " , CollegeData)
        res.status(200).json({CollegeData})
        return next();

    } catch (error) {
        console.log("error found" , error)
        return next(error);
        
    }
}


async function SearchAlumniYear_CollegeWise(req , res,next){
    try {
        const user = await db.alumniregistration.findAll(
            {
                where:   { CollegeId : req.params.CollegeId ,
                           YearOfPassing : req.params.year  }
            }
        )
        console.log("data read : " , user)
        res.status(200).json({user})
        return next();

    } catch (error) {
        console.log("error found" , error)
        return next(error);
        
    }
}
