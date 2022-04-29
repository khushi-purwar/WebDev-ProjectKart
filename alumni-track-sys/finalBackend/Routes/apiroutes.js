const express = require("express");
const router = express.Router();
const AlumniRegister = require("../app/controllers/alumniRegister");
const CollegeRegister = require("../app/controllers/collegeRegister");
const search = require("../app/controllers/searchDetails");
const event = require("../app/controllers/eventupdate");
const login = require("../app/controllers/Login");
const Middleware = require("../middlewares/jwt_decode");

router.post("/AlumniRegister", AlumniRegister.RegisterAlumni);
router.post("/CollegeRegister", CollegeRegister.RegisterCollege);
router.post("/EventDetails", event.EventDetails);
router.put("/updateDetails", AlumniRegister.UpdateDetails);
router.get("/SearchAlumniYearWise/:year", search.SearchAlumniYearWise);
router.get(
  "/SearchAlumniCollegeWise/:CollegeId/:year",
  search.SearchAlumniCollegeWise
);
router.get(
  "/SearchAlumniYear_CollegeWise/:CollegeId/:year",
  search.SearchAlumniYear_CollegeWise
);
router.get("/GetAllColleges", search.GetAllColleges);
router.post("/login", login.Login);
router.get("/GetEvents/:ClgId", event.GetEvents);

module.exports = router;
