const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser.js');
const Notes = require('../models/Notes');
const JWT_SECRET = 'rahulisagoodboy';

// Create a user using : POST "/api/auth/createuser" No login required*****************************ROUTE 1**********************************
router.post('/createuser', [
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Enter password of minimum 8 characters').isLength({ min: 8 }),

], async (req, res) => {
    let success= false;
    // If there are errors, return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    // Check if the user with this email exists already
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({success, error: "email already exists" })
        }
        const salt =await bcrypt.genSalt(10);
        const secPass =await bcrypt.hash(req.body.password,salt)
        // Create new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })
        const data = {
            user:{id:user.id}
        }
        const authtoken=jwt.sign(data,JWT_SECRET);
        success=true;
        res.json({success,authtoken})
    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured");
    }
})

// Authenticate a user : POST "/api/auth/login" No login required *****************************ROUTE 2**********************************
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', ' password cannot be blank').exists(),

], async (req, res) => {
    let success= false;
    // If there are errors, return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email,password}= req.body;
    try{
        let user=await User.findOne({email});
        if(!user){
            success= false;
            return res.status(400).json({ success,errors: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            success= false;
            return res.status(400).json({ success, errors: "Please try to login with correct credentials" });
        }
        
        const data = {
            user:{id:user.id}
        }
        const authtoken=jwt.sign(data,JWT_SECRET);
        success=true;
        res.json({success,authtoken})
    }catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error");
    }
})
// get logedin user details : POST "/api/notes/getuser" Login required *****************************ROUTE 3**********************************
router.post('/getuser',fetchuser, async (req, res) => {    
try {
        userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error");
    }
})

    module.exports = router;