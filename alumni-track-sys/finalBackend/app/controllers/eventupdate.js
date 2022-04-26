"use strict";
const db = require("../../models");
const express = require("express");
const BaseRepo = require("../Repository/BaseRepository");

const router = express.Router();

module.exports = {
  EventDetails,
  GetEvents,
};

async function EventDetails(req, res, next) {
  try {
    const data = await db.CollegeEvents.create({
      CollegeId: req.body.CollegeId,
      title: req.body.title,
      date: req.body.date,
    });
    console.log("data entered :", data);
    res.status(200).json("data sent successfully");
    return next();
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}

async function GetEvents(req, res, next) {
  const params = {
    searchParams: { CollegeId: req.params.ClgId },
    attributes: ["date", "title"],
  };
  try {
    const Holidays = await BaseRepo.baseList(db.CollegeEvents, params);
    console.log("holidays are => ", Holidays);
    //res.render('2022',{Holidays});
    res.send(Holidays);
  } catch (error) {
    //   try {
    //     const data = await db.events.findAll({
    //       where: { CollegeId: req.params.ClgId },
    //     });
    //     console.log("data entered :", data);
    //     res.status(200).json({ data });
    //     return next();
    //   }
    console.log("error : ", error);
    return next(error);
  }
}
